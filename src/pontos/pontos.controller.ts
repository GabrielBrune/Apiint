import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { CriarPontosDTO } from "./dto/criaPonto.dto";
import { ListarPontosEttDTO } from "./dto/listarPontoETT.dto";
import { PontoService } from "./pontos.service";


@Controller('/pontos')
export class PontoController{
    constructor(private readonly pontoService: PontoService ){
    }

    @Get('')
    async listar(): Promise<ListarPontosEttDTO[]>{
        return this.pontoService.listar();
    }

    @Post('formcoleta')
    async cria(@Body() dados: CriarPontosDTO): Promise<RetornoCadastroDTO>{        
        return this.pontoService.inserir(dados)        
    }
    
    @Delete('id')
    async removeProduto(@Param('id') id: string): Promise<RetornoObjDTO>{
        return this.pontoService.remover(id);
    }
}
