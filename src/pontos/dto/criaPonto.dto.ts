import { IsNotEmpty, IsString } from "class-validator";
import { CriarEntidadeDTO } from "src/entidade/dto/entidade.dto";

export class CriarPontosDTO{
    
    @IsString()
    @IsNotEmpty({message:"URL da imagem não pode ser vazia!"})
    IMG: string;

    @IsString()
    @IsNotEmpty({message:"A data de início não pode ser vazia!"})
    DATA_INICIO: string;

    @IsString()
    DATA_TERMINO: string;

    @IsString()
    @IsNotEmpty({message:"A descrição do local não pode ser vazia!"})
    DESCRICAO: string;

    @IsNotEmpty({message:"Nao pode ser vazio"})
    ENTIDADES:CriarEntidadeDTO;

}