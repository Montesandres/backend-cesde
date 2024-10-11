import { IsEmail, IsNumberString, IsString } from "class-validator";

export class CreateProfessorDto {

    @IsNumberString()
    document:string;

    @IsString()
    name:string;

    @IsEmail()
    email:string;
}
