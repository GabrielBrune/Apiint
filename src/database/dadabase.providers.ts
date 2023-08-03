import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async() => {
            const dataSource = new DataSource({
                type:'mysql',
                host:'localhost',
                port:3306,
                username:'projetointegrador',
                password:'projetointegrador@',
                database:'projetointegrador',
                entities:[
                    __dirname+ '/../**/*.entity{.ts,.js}',
                ],
                synchronize: false,
            });
 
            return dataSource.initialize();
        },
    },
];

