import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { EntidadeProviders } from "src/entidade/entidade.provider";
import { EntidadeService } from "src/entidade/entidade.service";
import { PontoController } from "./pontos.controller";
import { PontoProviders } from "./pontos.provider";
import { PontoService } from "./pontos.service";


@Module({
    imports: [DatabaseModule],
    controllers:[PontoController],
    providers:[...PontoProviders, 
                PontoService, 
            ...EntidadeProviders, 
            EntidadeService]
})

export class PontoModules{}