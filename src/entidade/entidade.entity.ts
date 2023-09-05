import { pontos } from "../pontos/pontos.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class ENTIDADES{
    @PrimaryColumn()
    ID:string;

    @Column()
    NOME:string;

    @Column()
    LOGRADOURO:string;

    @Column()
    CEP:string;

    @Column()
    NUMERO:string;

    @Column()
    COMPLEMENTO:string;

    @Column()
    BAIRRO:string;

    @Column()
    CIDADE:string;

    @Column()
    ESTADO:string;

    @Column()
    TELEFONE:string;

    @Column()
    EMAIL:string;

    @OneToMany(() =>pontos, ponto => ponto.entidade)
    ponto:pontos[];
}