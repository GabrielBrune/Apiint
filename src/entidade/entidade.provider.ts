import { DataSource } from "typeorm";
import { ENTIDADE } from "./entidade.entity";

export const EntidadeProviders = [
    {
        provide: 'ENTIDADES_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(ENTIDADE),
        inject: ['DATA_SOURCE']
    }
]