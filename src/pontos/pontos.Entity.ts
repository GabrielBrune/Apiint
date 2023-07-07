export class PointEntity{
    id: string;
    nome: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    dataInicio: BigInteger;
    dataTermino: BigInteger;
    pontoRef: string;
    descricao: string;
    telefone: BigInteger;
    email:string;
    status:Boolean;
    constructor(
        id: string, nome: string,
        cep: string, logradouro:string,
        numero:string, complemento: string,
        bairro: string, cidade: string,
        estado: string, dataInicio: BigInteger,
        dataTermino: BigInteger, pontoRef: string,
        descricao: string, telefone: BigInteger,
        email:string, status:Boolean){
            this.id = id,
            this.nome = nome,
            this.cep = cep,
            this.logradouro = logradouro,
            this.numero = numero,
            this.complemento = complemento,
            this.bairro = bairro,
            this.cidade = cidade,
            this.estado = estado,
            this.dataInicio = dataInicio,
            this.dataTermino = dataTermino,
            this.pontoRef = pontoRef,
            this.descricao = descricao,
            this.telefone = telefone,
            this.email = email,
            this.status = status
        }

}