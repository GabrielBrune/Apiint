import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('/auth')
export class AuthController{

    constructor(private AuthService: AuthService){}
    @HttpCode(HttpStatus.OK)
    @Post('/login')
    
    singIn(@Body() singInDto: Record<string, any>){
        return this.AuthService.singIn(singInDto.username , singInDto.password);
    }
}