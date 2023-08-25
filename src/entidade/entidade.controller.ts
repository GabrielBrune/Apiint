import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { CriarEntidadeDTO } from "./dto/entidade.dto";
import { ENTIDADES } from "./entidade.entity";
import { EntidadeService } from "./entidade.service";


@Controller('/entidade')
export class EntidadeController{
    constructor(private readonly EntidadeService: EntidadeService ){
    }

    @Get()
    async listar(): Promise<ENTIDADES[]>{
        return this.EntidadeService.listar();
    }

    @Post()
    async addEntity(@Body() dados: CriarEntidadeDTO): Promise<RetornoCadastroDTO> {
        const retorno = await this.EntidadeService.inserir(dados);
        return retorno
    }

    // @Put()

    @Delete('remove-:id')
    async removeMarca(@Param('id') id: string): Promise<void>{
        this.EntidadeService.remover(id);
    }

}
