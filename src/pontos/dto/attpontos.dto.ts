import { IsInt, IsOptional, IsString } from "class-validator";

export default class NewPoint{
    
    @IsString()
    @IsOptional()
    nome: string;
    
    @IsString()
    @IsOptional()
    cep: string;
    
    @IsString()
    @IsOptional()
    logradouro: string;
    
    @IsString()
    @IsOptional()
    numero: string;
    
    @IsString()
    @IsOptional()
    complemento: string;
    
    @IsString()
    @IsOptional()
    bairro: string;
    
    @IsString()
    @IsOptional()
    cidade: string;
   
    @IsString()
    @IsOptional()
    estado: string;

    @IsInt()
    @IsOptional()
    dataInicio: BigInteger;
    
    @IsInt()
    @IsOptional()
    dataTermino: BigInteger;
    
    @IsString()
    @IsOptional()
    pontoRef: string;
    
    @IsString()
    @IsOptional()
    descricao: string;
    
    @IsInt()
    @IsOptional()
    telefone: BigInteger;
    
    @IsString()
    @IsOptional()
    email:string;
}