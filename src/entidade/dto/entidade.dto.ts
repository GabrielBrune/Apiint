import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CriarEntidadeDTO{
    @IsString()
    @IsNotEmpty({message:'Nome da entidade nao pode ser vazio'})
    NOME:string;

    @IsString()
    @IsNotEmpty({message:'Logradouro não pode ser vazio'})
    LOGRADOURO:string;

    @IsString()
    @IsNotEmpty({message:'Cep não pode ser vazio'})
    CEP:string;

    @IsString()
    @IsNotEmpty({message:'Numero não pode ser vazio'})
    NUMERO:string;

    @IsString()
    @IsNotEmpty({message:'Complemento não pode ser vazio'})
    COMPLEMENTO:string;

    @IsString()
    @IsNotEmpty({message:'Bairro não pode ser vazio'})
    BAIRRO:string;

    @IsString()
    @IsNotEmpty({message:'Cidade não pode ser vazio'})
    CIDADE:string;

    @IsString()
    @IsNotEmpty({message:'Estado não pode ser vazio'})
    ESTADO:string;

    @IsString()
    @IsNotEmpty({message:'Telefone não pode ser vazio'})
    TELEFONE:string;

    @IsEmail()
    @IsNotEmpty({message:'Email não pode ser vazio'})
    EMAIL:string;

}