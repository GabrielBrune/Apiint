import { DataSource } from "typeorm";
import { ENTIDADES } from "./entidade.entity";

export const EntidadeProviders = [
    {
        provide: 'ENTIDADES_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(ENTIDADES),
        inject: ['DATA_SOURCE']
    }
]