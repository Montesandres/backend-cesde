import { IsEmail, IsNumberString, IsString } from "class-validator";

export class CreateProfessorDto {

    @IsNumberString()
    documentNumber:string;

    @IsString()
    name:string;

    @IsEmail()
    email:string;
}
