import { ENTIDADE } from "src/entidade/entidade.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class PONTOS{
    @PrimaryColumn()
    ID: string;

    @Column()
    ID_ENTIDADE: string;

    @Column()
    IMG: string;

    @Column()
    DATA_INICIO: string;

    @Column()
    DATA_TERMINO: string;

    @Column()
    DESCRICAO: string;

    @ManyToOne(() => ENTIDADE, entidade => entidade.ponto)
    @JoinColumn({name:"ID_ENTIDADE", referencedColumnName:"ID"})
    entidade:ENTIDADE;
}   