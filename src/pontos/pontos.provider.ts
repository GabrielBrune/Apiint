import { DataSource } from "typeorm";
import { pontos } from "src/pontos/pontos.entity";

export const PontoProviders = [
    {
        provide: 'PONTOS_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(pontos),
        inject: ['DATA_SOURCE']
    }
]