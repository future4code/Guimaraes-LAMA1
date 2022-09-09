export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado.")
    }
}

export class FieldsNotProvided extends CustomError {
    constructor(){
        super(400, 'Preencha os campos "name", "email", "password" e "role".')
    }
}

export class EmailAlreadyInUse extends CustomError {
    constructor(){
        super(409, "Email em uso.")
    }
}

export class InvalidName extends CustomError {
    constructor(){
        super(400, "Nome muito curto.")
    }
}

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "Informe um email válido.")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(400, "Tem que conter mais de 6 caracteres.")
    }
}

export class InvalidRole extends CustomError {
    constructor(){
        super(422, 'A propriedade "role" deve ser "admin" ou "user".')
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class InvalidToken extends CustomError{ 
    constructor(){
        super(404, "Chave inválida")
    }
}

export class MissingInformation extends CustomError{
    constructor() {
        super(400, 'Tem que preencher os campos "name ", "musicalGenre"  e "responsible".')
    }
}

export class MissingToken extends CustomError{
    constructor() {
        super(400, 'Tem que fornecer uma chave')
    }
}

export class BandAlreadyRegistered extends CustomError {
    constructor(){
        super(409, "Banda Já foi Cadastrada")
    }
}

export class InvalidFields extends CustomError {
    constructor(){
        super(400, "Campos inválidos.")
    }
}