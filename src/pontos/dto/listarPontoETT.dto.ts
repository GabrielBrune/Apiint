
export class ListarPontosEttDTO{
    constructor(
        readonly ID:string,
        readonly IMG:string,
        readonly DATA_INICIO: string,
        readonly DATA_TERMINO: string,
        readonly DESCRICAO:string,
        readonly ENTIDADE: string
    ){}

}