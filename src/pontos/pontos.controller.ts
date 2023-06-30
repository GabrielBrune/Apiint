import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriarPonto } from "./dto/pontos.dto";
import { PontosArmazenados } from "./pontos.dm";
import { PointEntity } from "./pontos.Entity";
import {v4 as uuid} from 'uuid'
import AttPoint from "./dto/attpontos.dto";
import { ListaPontoDTO } from "./dto/listaPonto.dto";



@Controller('/pontos')
export class PontoController{
    constructor(private clsPontosArmazenados: PontosArmazenados){
    }

    @Get()
    async RetornoPontosNome(){
        const pontosListados = await this.clsPontosArmazenados.Point;
        const ListaHome = pontosListados.map(
            ponstos => new ListaPontoDTO(
                ponstos.nome,
                ponstos.dataInicio,
                ponstos.dataTermino,
            )
        )
            return ListaHome ;
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
                id: criarPonto.id,
                nome: criarPonto.nome,
                dataInicio:criarPonto.dataInicio,
                dataTermino:criarPonto.dataTermino,
                message:'Ponto criado com sucesso!'
            }
            return retornoPonto;
    }

    @Put('/:id')
    async AtualizarPonto(@Param('id') id: string,@Body() AttPoint: AttPoint){
        const PontoAtualizado = await this.clsPontosArmazenados.attPoint(id, AttPoint);
        return{
            nome: PontoAtualizado,
            message:'Ponto atualizado com sucesso!'
        }
    }
    
    @Delete('/:id')
    async RemoverPonto(@Param('id') id: string){
        const pontoRemovido = await this.clsPontosArmazenados.removePoint(id);
        return{
            nome:pontoRemovido,
            message:'Ponto removido com sucesso!'
        }
    }

}
