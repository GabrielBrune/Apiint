// import { Injectable } from "@nestjs/common";
// import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
// import { UsuariosArmazenados } from "src/user/user.dm";

// @Injectable()
// @ValidatorConstraint({async:true})
// export class EmailUnicoValidator implements ValidatorConstraintInterface{
//     constructor (private clsPontosArmazenados: UsuariosArmazenados ){}
    
//     async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
//         const ValidaEmail = await this.clsPontosArmazenados.ValidaEmail(value);
//         return !ValidaEmail;
//     }    
// }

// export const EmailUnico = (opcaoValidacao: ValidationOptions)=>{
//     return (objeto: Object, propriedade: string) => {
//         registerDecorator({
//             target: objeto.constructor,
//             propertyName: propriedade,
//             options: opcaoValidacao,
//             constraints: [],
//             validator: EmailUnicoValidator,
//         })
//     }
// }