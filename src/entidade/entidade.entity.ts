import { PONTOS } from "src/pontos/pontos.Entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class ENTIDADE{
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

    @OneToMany(() =>PONTOS, ponto => ponto.entidade)
    ponto:PONTOS[]
}