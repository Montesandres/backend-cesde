import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Repository } from 'typeorm';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorsService {
  logger = new Logger(ProfessorsService.name);

  constructor(
    @Inject('PROFESSOR_REPOSITORY')
    private professorRepository: Repository<Professor>,
  ) {}

  async create(createProfessorDto: CreateProfessorDto) {
    try {
      const { documentNumber, name, email } = createProfessorDto;
      const newProfessor = this.professorRepository.create({
        document: documentNumber,
        name,
        email,
      });
      const res = await this.professorRepository.save(newProfessor);
      return res;
    } catch (error) {
      this.handleDbError(error, this.logger);
    }
  }

  findAll() {
    return this.professorRepository.find();
  }

  async findOne(id: number) {
    try {
      const professor = await this.professorRepository.findOneOrFail({
        where: { id },
      });
      return professor;
    } catch (error) {
      this.handleDbError(
        {
          code: 'error-001',
          detail: `${id} not Found`,
        },
        this.logger,
      );
    }
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto) {
    try {
      const { name, email } = updateProfessorDto;
      const professorToUpdate = await this.professorRepository.preload({
        id,
        name,
        email
      });

      const professorSaved = await this.professorRepository.save(
        professorToUpdate,
      );

      return professorSaved;
    } catch (error) {
      this.handleDbError(error, this.logger);
    }
  }

  async remove(id: number) {
    try {
      const professorToDelete = await this.findOne(id);
      await this.professorRepository.softDelete(id);
      return professorToDelete;
    } catch (error) {
      this.handleDbError(error, this.logger);
    }
  }

  

  handleDbError(error: any, logger: Logger) {
    switch (error.code) {
      case '23505':
        throw new BadRequestException(error.detail.replace('Key', ''));
      case 'error-001':
        throw new NotFoundException(error.detail.replace('Key', ''));
      case 'error-002':
        throw new ForbiddenException(error.detail.replace('Key', ''));
      default: {
        logger.error(`error: ${error}`);
        throw new InternalServerErrorException(`Internal error, check in logs`);
      }
    }
  }
}
