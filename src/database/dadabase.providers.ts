import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async() => {
            const dataSource = new DataSource({
                type:'mysql',
                host:'ns582.hostgator.com.br',
                port:3306,
                username:'vitali04_aquecame',
                password:'28051976mae',
                database:'vitali04_aquecame',
                entities:[
                    __dirname+ '/../**/*.entity{.ts,.js}',
                ],
                synchronize: false,
            });
 
            return dataSource.initialize();
        },
    },
];

