import { IsNotEmpty, IsString } from "class-validator";
import { CriarEntidadeDTO } from "src/entidade/dto/entidade.dto";

export class CriarPontosDTO{
    
    @IsString()
    @IsNotEmpty({message:"Url de imagem nao pode ser vazia!"})
    IMG: string;

    @IsString()
    @IsNotEmpty({message:"A data de inicio nao pode ser vazia!"})
    DATA_INICIO: string;

    @IsString()
    DATA_TERMINO: string;

    @IsString()
    @IsNotEmpty({message:"A descrição do local nao pode ser vazia!"})
    DESCRICAO: string;

    @IsString()
    ENTIDADES:CriarEntidadeDTO;

}