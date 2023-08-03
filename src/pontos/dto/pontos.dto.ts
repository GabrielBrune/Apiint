import { IsNotEmpty, IsString } from "class-validator";

export class CriarPontoDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;
}