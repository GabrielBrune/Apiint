import { Controller } from "@nestjs/common";
import { AdmArmazenado } from "./usuario.dm";

@Controller('/pontos')
export class AdmUserController{
    constructor(private clsUsuarioAdmArmazenado: AdmArmazenado){
    }
}