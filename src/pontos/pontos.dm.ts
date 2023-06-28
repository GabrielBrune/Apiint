import { Injectable } from "@nestjs/common";
import { PointEntity } from "./pontos.Entity";

@Injectable()
export class PontosArmazenados{
    
    #point:PointEntity[] = [];
    
    async addPoint(pontos:PointEntity){
        this.#point.push(pontos);
    }

    get Point(){
        return this.#point;
    }

    async ValidaEmail(email: string){
        const validadorEmail = this.#point.find(
            pontosSalvos => pontosSalvos.email === email
        );

        return (validadorEmail !== undefined);
    }

    async buscarPointID(id: string){
        const possivelPoint = this.#point.find(
            pointSalve => pointSalve.id === id
        );
        return possivelPoint; 
    }

    async attPoint(id: string, dadosAtt: Partial<PointEntity>){
        const Pointnew = this.buscarPointID(id)

        Object.entries(dadosAtt).forEach(
            ([chave, valor]) => {
                if(chave === 'id'){
                    return;
                }
                Pointnew[chave] = valor;
            }
        )
        return Pointnew;
    }

    async removePoint(id: string){
        const possivelPoint= this.buscarPointID(id);
        this.#point = this.#point.filter(
            usuarioSalvo => usuarioSalvo.id !==id
        )

        if(!possivelPoint){
            throw new Error('Usuario nao encontrado!');
        }
        return possivelPoint;
    }

    async buscarPointNome(nome: string){
        const possivelPoint = this.#point.find(
            pointSalve => pointSalve.nome === nome
        );
        return possivelPoint; 
    }

}