import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { PontoController } from "./pontos.controller";
import { PontoProviders } from "./pontos.provider";
import { PontoService } from "./pontos.service";


@Module({
    imports: [DatabaseModule],
    controllers:[PontoController],
    providers:[...PontoProviders, PontoService]
})

export class PontoModules{}