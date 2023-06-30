export class AdmUsuario{
    login:string
    #senha:string
    constructor(
        login:string,
        senha:string
    ){
        this.login = login;
        this.#senha = senha;
    }

    get senha(){
        return '***********'
    }

    set senha (newPassword){
        this.#senha = newPassword
    }
    
}