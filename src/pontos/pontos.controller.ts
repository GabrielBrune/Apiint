import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Pontos } from "./pontos.Entity";
import { PontoService } from "./pontos.service";


@Controller('/pontos')
export class PontoController{
    constructor(private readonly pontoService: PontoService ){
    }

    @Get()
    async listar(): Promise<Pontos[]>{
        return this.pontoService.listar();
    }

    // @Post()

    // @Put()

    // @Delete()

}
