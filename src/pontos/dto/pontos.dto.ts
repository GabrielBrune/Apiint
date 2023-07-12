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
    dataInicio: string;
    
    @IsInt()
    dataTermino: string;
    
    @IsString()
    descricao: string;
    
    @IsInt()
    telefone: string;
    
    @IsString()
    email:string;

    @IsBoolean()
    status:Boolean;
}