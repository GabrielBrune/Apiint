import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { PontoProviders } from "src/pontos/pontos.provider";
import { PontoService } from "src/pontos/pontos.service";
import { EntidadeController } from "./entidade.controller";
import { EntidadeProviders } from "./entidade.provider";
import { EntidadeService } from "./entidade.service";

@Module({
    imports: [DatabaseModule],
    controllers:[EntidadeController],
    providers:[ 
        ...EntidadeProviders, 
        EntidadeService,
        ...PontoProviders, 
                PontoService, 
    ]
})

export class EntidadeModules{}