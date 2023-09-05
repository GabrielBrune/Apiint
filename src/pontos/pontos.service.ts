import { Inject, Injectable } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { ENTIDADES } from "src/entidade/entidade.entity";
import { EntidadeService } from "src/entidade/entidade.service";
import { Repository } from "typeorm/repository/Repository";
import { CriarPontosDTO } from "./dto/criaPonto.dto";
import { v4 as uuid } from 'uuid'
import { ListarPontosEttDTO } from "./dto/listarPontoETT.dto";
import { AlteraPontosDTO } from "./dto/alterPonto.dto";
import { pontos } from "src/pontos/pontos.entity";

@Injectable()
export class PontoService{
  constructor(
          @Inject('PONTOS_REPOSITORY')
          private pontoRepository: Repository<pontos>,
          @Inject('ENTIDADES_REPOSITORY')
          private entidadeRepository: Repository<ENTIDADES>,
          private readonly entidadeService: EntidadeService,
  ){}

  async listar(): Promise<ListarPontosEttDTO[]> {
      var resultado = await (this.pontoRepository
        .createQueryBuilder('pontos')
        .select('pontos.id', 'ID')
        .addSelect('pontos.img','IMG')    
        .addSelect('pontos.DATA_INICIO','DATA_INICIO')
        .addSelect('pontos.DATA_TERMINO','DATA_TERMINO')
        .addSelect('pontos.descricao','DESCRICAO')
        .addSelect('ETT.nome','ENTIDADE')
        .addSelect('ETT.logradouro','LOGRADOURO')
        .addSelect('ETT.cep','CEP')
        .addSelect('ETT.numero','NUMERO')
        .addSelect('ETT.complemento','COMPLEMENTO')
        .addSelect('ETT.bairro','BAIRRO')
        .addSelect('ETT.cidade','CIDADE')
        .addSelect('ETT.estado','ESTADO')
        .addSelect('ETT.telefone','TELEFONE')
        .addSelect('ETT.email','EMAIL')
        .innerJoinAndSelect('entidades', 'ETT','pontos.id_entidade = ETT.id')                     
        .getRawMany());  
  
      const listaRetorno = resultado.map(
        ponto => new ListarPontosEttDTO (          
          ponto.ID,
          ponto.IMG,
          ponto.DATA_INICIO,
          ponto.DATA_TERMINO,
          ponto.DESCRICAO,
          ponto.ENTIDADE,
          ponto.LOGRADOURO,
          ponto.CEP,
          ponto.NUMERO,
          ponto.COMPLEMENTO,
          ponto.BAIRRO,
          ponto.CIDADE,
          ponto.ESTADO,
          ponto.TELEFONE,
          ponto.EMAIL
        )
      );
  
      return listaRetorno;
    }

  
  async inserir(dados: CriarPontosDTO): Promise<RetornoCadastroDTO>{
    let retornoEntidade = await this.entidadeService.inserir(dados.ENTIDADES); 

    let ponto = new pontos();
        ponto.ID = uuid();
        ponto.IMG = dados.IMG;
        ponto.DATA_INICIO = dados.DATA_INICIO;
        ponto.DATA_TERMINO = dados.DATA_TERMINO;
        ponto.DESCRICAO = dados.DESCRICAO;
        ponto.entidade = await this.entidadeService.localizarID(retornoEntidade.id)
        
    return this.pontoRepository.save(ponto)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: ponto.ID,
        message: "Ponto cadastrado!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao cadastrar." + error.message
      };
    })
  }

  localizarID(ID: string): Promise<pontos> {
    return this.pontoRepository.findOne({
      where: {
        ID,
      },
    });
  }

  async remover(ID: string): Promise<RetornoObjDTO> {
    
    const pontos = await this.localizarID(ID);
    
    return this.pontoRepository.remove(pontos)
    .then(async (result) => {
      const entidade = await this.entidadeService.remover(pontos.entidade.ID);
      return <RetornoObjDTO>{
        return: pontos,
        message: "Ponto excluida!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: pontos,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
  }

  async alterar(id: string, dados: AlteraPontosDTO): Promise<RetornoCadastroDTO> {
    const pontos = await this.localizarID(id);


    for await (const [chave, valor] of Object.entries(dados)) {
      if (chave === 'id') {
        return;
      }

      if (chave === 'PESSOA') {
        if (pontos.entidade != undefined) {
          this.entidadeService.alterar(pontos.entidade.ID, valor);
        }
        else {
          let retornoPessoa = await this.entidadeService.inserir(valor);
          pontos.entidade = await this.entidadeService.localizarID(retornoPessoa.id);
        }
      }

      pontos[chave] = valor;
    }    

    return this.entidadeRepository.save(pontos)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: pontos.ID,
        message: "Ponto alterada!"
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