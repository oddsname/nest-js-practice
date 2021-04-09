import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class RegisterDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string

    @IsEmail()
    @MaxLength(100)
    email: string

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    password: string
}