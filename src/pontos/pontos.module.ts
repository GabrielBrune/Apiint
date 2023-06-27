import { Module } from "@nestjs/common";
import { PontoController } from "./pontos.controller";
import { PontosArmazenados } from "./pontos.dm";


@Module({
    controllers:[PontoController],
    providers:[PontosArmazenados]
})

export class PontoModules{}