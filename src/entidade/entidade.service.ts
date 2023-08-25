import { Inject, Injectable } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { Repository } from "typeorm";
import { ENTIDADES } from "./entidade.entity";
import { v4 as uuid } from "uuid";
import { CriarEntidadeDTO } from "./dto/entidade.dto";

@Injectable()
export class EntidadeService {
  constructor(
    @Inject('ENTIDADES_REPOSITORY')
    private entidadeRepository: Repository<ENTIDADES>,
  ) {}

  async listar(): Promise<ENTIDADES[]> {
    return this.entidadeRepository.find();
  }

  async inserir(dados: CriarEntidadeDTO): Promise<RetornoCadastroDTO>{
    let entidade = new ENTIDADES();
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

  localizarID(ID: string): Promise<ENTIDADES> {
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
    const entidade = await this.localizarID(id);
    
    return this.entidadeRepository.remove(entidade)
    .then((result) => {
      return <RetornoObjDTO>{
        return: entidade,
        message: "Entidade excluida!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: entidade,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
  }

  async alterar(id: string, dados: CriarEntidadeDTO): Promise<RetornoCadastroDTO> {
    const entidade = await this.localizarID(id);

    Object.entries(dados).forEach(
      ([chave, valor]) => {
          if(chave=== 'id'){
              return;
          }

          entidade[chave] = valor;
      }
    )

    return this.entidadeRepository.save(entidade)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: entidade.ID,
        message: "Entidade alterada!"
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