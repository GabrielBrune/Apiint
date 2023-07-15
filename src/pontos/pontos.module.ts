import { Module } from "@nestjs/common";
import { PontoController } from "./pontos.controller";
import { PontoProviders } from "./pontos.provider";
import { PontoService } from "./pontos.service";


@Module({
    controllers:[PontoController],
    providers:[
        ...PontoProviders,
        PontoService]
})

export class PontoModules{}