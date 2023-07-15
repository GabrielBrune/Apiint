import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pontos{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    dataInicio: string;

    @Column()
    dataTermino: string;

    @Column()
    descricao: string;

    @Column()
    telefone: string;

    @Column()
    email:string;

    @Column()
    status:Boolean;
}