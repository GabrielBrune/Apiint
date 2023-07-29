import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { Pontos } from "./pontos.Entity";

@Injectable()
export class PontoService{
    constructor(
            @Inject('MARCA_REPOSITORY')
            private pontoRepository: Repository<Pontos>
    ){}

    async listar(): Promise<Pontos[]>{
        return this.pontoRepository.find();
    }
   
    async localizarID(id: string): Promise<Pontos>{
        return this.pontoRepository.findOne({
        where: {id,},
        });
    }

    async remover(id: string): Promise<void> {
        const user = await this.localizarID(id);
        await this.pontoRepository.remove(user);
      }
}