export class ListaPontoDTO{
    constructor(
        readonly nome:string,
        readonly dataInicio:BigInteger,
        readonly dataTermino:BigInteger
    ){}
}