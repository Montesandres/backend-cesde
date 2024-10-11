import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {  
    return this.subjectsService.create(createSubjectDto);
  }

  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(+id);
  }

  @Get('getByName/:name')
  findByName(@Param('name') name: string) {
    return this.subjectsService.getByName(name);
  }

  @Get('getByProfessorId/:id')
  findByProfessorId(@Param('id') id: string) {
    return this.subjectsService.getSubjectsByProfessorId(+id);
  }

  @Get('getPriceGreaterThan/:price')
  getPriceGreaterThan(@Param('price') price:string){
    return this.subjectsService.getPriceGreaterThan(+price);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(+id);
  }
}
