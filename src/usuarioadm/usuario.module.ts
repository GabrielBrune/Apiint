import { Module } from "@nestjs/common";
import { AdmUserController } from "./usuario.controller";
import { AdmArmazenado } from "./usuario.dm";

@Module({
    controllers:[AdmUserController],
    providers:[AdmArmazenado]
})

export class UsuarioModules{}