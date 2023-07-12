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

    @Get(':status')
    async RetornoPontosNome(@Param('status') status: boolean){
        const pontosListados = await this.clsPontosArmazenados.buscarPointStaus(status);
        const ListaHome = pontosListados.map(
            ponstos => new ListaPontoDTO(
                ponstos.nome,
                ponstos.dataInicio,
                ponstos.dataTermino,
            )
        )
            return ListaHome ;
    }

    @Get('detalhamento')
    async RetornoPontosId(@Param('nome') nome: string){
        const pontosListados = await this.clsPontosArmazenados.buscarPointNome(nome);
            return pontosListados;
    }

    @Get('pedidos')
    async RetornoPedidos(@Param('id') id: string){
        const Pedidoslistados = await this.clsPontosArmazenados.buscarPointID(id);
        return Pedidoslistados
    }

    @Post('formulariocoleta')
    async FormularioColeta(@Body() novoPost: CriarPonto){
        var retornoPonto;
        var criarPonto = new PointEntity(
            uuid(),
            novoPost.nome, novoPost.cep,
            novoPost.logradouro, novoPost.numero,
            novoPost.complemento, novoPost.bairro,
            novoPost.cidade, novoPost.estado,
            novoPost.dataInicio, novoPost.dataTermino,
            novoPost.descricao, novoPost.telefone, 
            novoPost.email, novoPost.status);

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
