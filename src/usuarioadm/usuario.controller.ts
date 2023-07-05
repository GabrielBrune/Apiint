import { Controller, Get } from "@nestjs/common";
import { AdmArmazenado } from "./usuario.dm";

@Controller('/adm')
export class AdmUserController{
    constructor(private clsUsuarioAdmArmazenado: AdmArmazenado){
    }

    @Get()
    async RetornoPontosId(){
        const pontosListados = await this.clsUsuarioAdmArmazenado.BuscarLogin();
            return pontosListados;
    }
    
}