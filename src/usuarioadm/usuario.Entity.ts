import { Entity } from "typeorm"

@Entity()
export class AdmUsuario{
    login:string
    #senha: string
    constructor(
    ){}


    get senha(){
        return '***********'
    }
}