import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";

export default class AttPoint{
    
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
    dataInicio: string;
    
    @IsInt()
    @IsOptional()
    dataTermino: string;
    
    @IsString()
    @IsOptional()
    pontoRef: string;
    
    @IsString()
    @IsOptional()
    descricao: string;
    
    @IsInt()
    @IsOptional()
    telefone: string;
    
    @IsString()
    @IsOptional()
    email:string;

    @IsBoolean()
    @IsOptional()
    status:Boolean;
}