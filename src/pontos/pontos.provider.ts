import { DataSource } from "typeorm";
import { PONTOS } from "./pontos.entity";

export const PontoProviders = [
    {
        provide: 'PONTOS_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(PONTOS),
        inject: ['DATA_SOURCE']
    }
]