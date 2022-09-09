import { CustomError } from "./CustomError"

export class InvalidPassword extends CustomError(
constructor(){
    super(400, 'Senha Inválida')
}
)