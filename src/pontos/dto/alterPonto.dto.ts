import { IsOptional, IsString } from "class-validator";


export class AlteraPontosDTO{
    @IsString()
    @IsOptional()
    IMG: string;    

    @IsOptional()
    @IsString()
    DATA_INICIO: string;
    
    @IsOptional()
    @IsString()
    DATA_TERMINO: string;

    @IsOptional()
    @IsString()
    DESCRICAO:string;

    
}