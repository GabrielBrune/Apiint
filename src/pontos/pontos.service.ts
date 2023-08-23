import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { PONTOS } from "./pontos.Entity";

@Injectable()
export class PontoService{
    constructor(
            @Inject('PONTOS_REPOSITORY')
            private pontoRepository: Repository<PONTOS>
    ){}

    async adicionarPontos(postData: Partial<PONTOS>): Promise<PONTOS>{
        const novoPonto = this.pontoRepository.create(postData);
        return this.pontoRepository.save(novoPonto);
    }

    async listar(): Promise<PONTOS[]>{
        return this.pontoRepository.find();
    }
   
    async localizarID(ID: string): Promise<PONTOS>{
        return this.pontoRepository.findOne({
        where: {ID,},
        });
    }

    async remover(id: string): Promise<void> {
        const user = await this.localizarID(id);
        await this.pontoRepository.remove(user);
      }
}