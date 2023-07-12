import { IsString, IsBoolean } from "class-validator";

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

    @IsString()
    dataInicio: string;
    
    @IsString()
    dataTermino: string;
    
    @IsString()
    descricao: string;
    
    @IsString()
    telefone: string;
    
    @IsString()
    email:string;

    @IsBoolean()
    status:Boolean;
}