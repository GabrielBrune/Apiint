import { Injectable } from "@nestjs/common";
import { AdmUsuario } from "./usuario.Entity";

@Injectable()
export class AdmArmazenado{
    #admusuario: AdmUsuario[] = [];

    BuscarLogin(){
        return this.#admusuario 
    }
}