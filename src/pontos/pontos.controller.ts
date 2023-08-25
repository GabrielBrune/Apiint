import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PONTOS } from "./pontos.entity";
import { PontoService } from "./pontos.service";


@Controller('/pontos')
export class PontoController{
    constructor(private readonly pontoService: PontoService ){
    }

    @Get()
    async listar(): Promise<PONTOS[]>{
        return this.pontoService.listar();
    }

    @Post('form')
    async addPonto(@Body() postData: Partial<PONTOS>) {
        const addPost = await this.pontoService.adicionarPontos(postData);
        return addPost;
    }

    // @Put()

    @Delete('remove-:id')
    async removeMarca(@Param('id') id: string): Promise<void>{
        this.pontoService.remover(id);
    }

}
