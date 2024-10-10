import { IsDateString, IsInt, IsNumber, IsString } from "class-validator";

export class CreateSubjectDto {
  
    @IsString()
    name: string;
  
    @IsString()
    description: string;
  
   
    @IsInt()
    duration: number;
  
    @IsNumber()
    price: number;
  
    @IsDateString()
    startDate: Date;
  
    @IsInt()
    professorId:number;
}
