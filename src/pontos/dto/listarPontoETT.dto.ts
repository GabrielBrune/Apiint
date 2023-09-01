
export class ListarPontosEttDTO{
    constructor(
        readonly id: string,
        readonly img: string,
        readonly dataInicio: string,
        readonly dataTermino: string,
        readonly descricao: string,
        readonly entidade: string,
        readonly logradouro: string,
        readonly cep: string,
        readonly numero: string,
        readonly complemento: string,
        readonly bairro: string,
        readonly cidade: string,
        readonly estado: string,
        readonly telefone: string,
        readonly email: string
    ){}

}