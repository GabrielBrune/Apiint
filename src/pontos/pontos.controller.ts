import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { stringify } from "querystring";
import { ListaPontoDTO } from "./dto/listaPonto.dto";
import { CriarPonto } from "./dto/pontos.dto";
import { PontosArmazenados } from "./pontos.dm";
import { PointEntity } from "./pontos.Entity";
import {v4 as uuid} from 'uuid'

@Controller('/pontos')
export class PontoController{
    constructor(private clsPontosArmazenados: PontosArmazenados){
    }

    @Get('nome:-nome')
    async RetornoPontosNome(@Param('nome') nome: string){
        const pontosListados = await this.clsPontosArmazenados.buscarPointNome(nome);
            return pontosListados;
    }

    @Get('id:-id')
    async RetornoPontosId(@Param('id') id: string){
        const pontosListados = await this.clsPontosArmazenados.buscarPointNome(id);
            return pontosListados;
    }

    @Post('fomulariocoleta')
    async FormularioColeta(@Body() novoPost: CriarPonto){
        var retornoPonto;
        var criarPonto = new PointEntity(
            uuid(),
            novoPost.nome, novoPost.cep,
            novoPost.logradouro, novoPost.numero,
            novoPost.complemento, novoPost.bairro,
            novoPost.cidade, novoPost.estado,
            novoPost.dataInicio, novoPost.dataTermino,
            novoPost.pontoRef, novoPost.descricao,
            novoPost.telefone, novoPost.email);

            this.clsPontosArmazenados.addPoint(criarPonto)
            retornoPonto={
                

            }


    }

    // @Put()
    
    // @Delete()

}
