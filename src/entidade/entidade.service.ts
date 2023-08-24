import { Inject, Injectable } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { Repository } from "typeorm";
import { ENTIDADE } from "./entidade.entity";
import { v4 as uuid } from "uuid";
import { CriarEntidadeDTO } from "./dto/entidade.dto";

@Injectable()
export class MarcaService {
  constructor(
    @Inject('ENTIDADE_REPOSITORY')
    private entidadeRepository: Repository<ENTIDADE>,
  ) {}

  async listar(): Promise<ENTIDADE[]> {
    return this.entidadeRepository.find();
  }

  async inserir(dados: CriarEntidadeDTO): Promise<RetornoCadastroDTO>{
    let entidade = new ENTIDADE();
        entidade.ID = uuid();
        entidade.NOME = dados.NOME;
        entidade.LOGRADOURO = dados.LOGRADOURO;
        entidade.CEP = dados.CEP;
        entidade.NUMERO = dados.NUMERO;
        entidade.COMPLEMENTO = dados.COMPLEMENTO;
        entidade.BAIRRO = dados.BAIRRO;
        entidade.CIDADE = dados.CIDADE;
        entidade.ESTADO = dados.ESTADO;
        entidade.TELEFONE = dados.TELEFONE;
        entidade.EMAIL = dados.EMAIL;

    return this.entidadeRepository.save(entidade)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: entidade.ID,
        message: "Entidade cadastrada!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao cadastrar." + error.message
      };
    })

    
  }

  localizarID(ID: string): Promise<ENTIDADE> {
    return this.entidadeRepository.findOne({
      where: {
        ID,
      },
    });
  }

   async listaNomes(): Promise<any[]> {
    return this.entidadeRepository.find({
      select:{
        NOME:true,
      }
    });
  }

  async remover(id: string): Promise<RetornoObjDTO> {
    const marca = await this.localizarID(id);
    
    return this.entidadeRepository.remove(marca)
    .then((result) => {
      return <RetornoObjDTO>{
        return: marca,
        message: "Marca excluida!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: marca,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
  }

  async alterar(id: string, dados: CriarEntidadeDTO): Promise<RetornoCadastroDTO> {
    const marca = await this.localizarID(id);

    Object.entries(dados).forEach(
      ([chave, valor]) => {
          if(chave=== 'id'){
              return;
          }

          marca[chave] = valor;
      }
    )

    return this.entidadeRepository.save(marca)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: marca.ID,
        message: "Marca alterada!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao alterar." + error.message
      };
    });
  }
}