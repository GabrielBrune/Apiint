import { IsString, IsInt, IsBoolean } from "class-validator";

export class CriarPonto{
    
    @IsString()
    nome: string;
    
    @IsString()
    cep: string;
    
    @IsString()
    logradouro: string;
    
    @IsString()
    numero: string;
    
    @IsString()
    complemento: string;
    
    @IsString()
    bairro: string;
    
    @IsString()
    cidade: string;
   
    @IsString()
    estado: string;

    @IsInt()
    dataInicio: BigInteger;
    
    @IsInt()
    dataTermino: BigInteger;
    
    @IsString()
    pontoRef: string;
    
    @IsString()
    descricao: string;
    
    @IsInt()
    telefone: BigInteger;
    
    @IsString()
    email:string;

    @IsBoolean()
    status:Boolean;
}