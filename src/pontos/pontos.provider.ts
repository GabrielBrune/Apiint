import { DataSource } from "typeorm";
import {Pontos} from "./pontos.Entity";

export const PontoProviders = [
    {
        provide: 'PONTOS_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(Pontos),
        inject: ['DATA_SOURCE']
    }
]