import { DataSource } from "typeorm";
import { AdmUsuario } from './usuario.Entity'

export const PontoProviders = [
{
        provide: 'PONTOS_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(AdmUsuario),
        inject: ['DATA_SOURCE']
    }

]