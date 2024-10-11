import { IsDateString, IsInt, IsNumber, IsString } from "class-validator";

export class CreateSubjectDto {
  
    @IsString()
    name: string;
  
    @IsString()
    description: string;
  
   
    @IsNumber()
    duration: number;
  
    @IsNumber()
    price: number;
  
    @IsDateString()
    startDate: Date;
  
    @IsNumber()
    professorId:number;
}
