import { Injectable } from "@nestjs/common";
import { PointEntity } from "./pontos.Entity";

@Injectable()
export class PontosArmazenados{
    removerPonto( id:string ){
         throw new Error("Method not implemented.");
    }
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
}