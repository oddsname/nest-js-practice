import {IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";

export class LoginDto {

    @IsEmail()
    @MaxLength(100)
    email: string

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    password: string
}