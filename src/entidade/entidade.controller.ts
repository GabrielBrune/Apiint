import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { CriarEntidadeDTO } from "./dto/entidade.dto";
import { ENTIDADES } from "./entidade.entity";
import { EntidadeService } from "./entidade.service";


@Controller('/entidade')
export class EntidadeController{
    constructor(private readonly EntidadeService: EntidadeService ){
    }

}
