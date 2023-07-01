import { Module } from "@nestjs/common";
import { AdmUserController } from "./usuario.controller";

@Module({
    controllers:[AdmUserController],
    providers:[]
})

export class UsuarioModules{}