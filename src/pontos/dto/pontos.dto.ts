import { IsNotEmpty, IsString } from "class-validator";

export class CriarPontoDTO{
    @IsString()
    @IsNotEmpty({message: "Informe o nome da entidade do ponto da coleta"})
    nome: string;

    @IsString()
    @IsNotEmpty({message: "Informe o cep da entidade do ponto da coleta"})
    cep: string;

    @IsString()
    @IsNotEmpty({message: "Informe a localizaçao exemplo: Av. Brasil "})
    logradouro: string;

    @IsString()
    @IsNotEmpty({message: "Informe a quadra e o numero"})
    numero: string;

    @IsString()
    complemento: string;

    @IsString()
    @IsNotEmpty({message: "Informe o bairro da entidade que está coletando"})
    bairro: string;

    @IsString()
    @IsNotEmpty({message: "Informe a cidado exemplo: Curitiba"})
    cidade: string;

    @IsString()
    @IsNotEmpty({message: "Informe o estado exemplo: São Paulo"})
    estado: string;

    @IsString()
    @IsNotEmpty({message: "Informe a data de Início da coleta"})
    dataInicio: string;

    @IsString()
    @IsNotEmpty({message: "Informe a data de Término da coleta"})
    dataTermino: string;

    @IsString()
    @IsNotEmpty({message: "descreva onde estará o ponto de coleta"})
    descricao: string;

    @IsString()
    telefone: string;

    @IsString()
    email:string;
}