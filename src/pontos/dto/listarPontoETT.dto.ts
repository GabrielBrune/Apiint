
export class ListarPontosEttDTO{
    constructor(
        readonly id:string,
        readonly img:string,
        readonly dataInicio: string,
        readonly dataTermino: string,
        readonly descricao:string,
        readonly entidade: string
    ){}

}