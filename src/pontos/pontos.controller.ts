import { Body, Controller, Get, Param } from "@nestjs/common";
import { ListaPontoDTO } from "./dto/listaPonto.dto";
import { PontosArmazenados } from "./pontos.dm";

@Controller('/pontos')
export class PontoModules{
    constructor(private clsPontosArmazenados: PontosArmazenados){
    }

    @Get('id-:id')
    async RetornoProdutos(@Param('id') id: string){
        const pontosListados = await this.clsPontosArmazenados.buscarPointID(id);
            return pontosListados;
    }

}