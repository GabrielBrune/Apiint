import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class AdmUsuarioDTO{
    @IsString()
    @IsNotEmpty({message:'Login nao pode estar vazio!'})
    login:string

    @MinLength(6, {message: 'Senha Invalido!'})
    senha: string;

}