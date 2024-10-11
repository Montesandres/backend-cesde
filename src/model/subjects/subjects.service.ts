import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { MoreThan, Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectsService {
  logger = new Logger(SubjectsService.name);

  constructor(
    @Inject('SUBJECT_REPOSITORY')
    private subjectRepository: Repository<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    try {
      const { name, description, duration, price, startDate, professorId } =
        createSubjectDto;
      const newSubject = this.subjectRepository.create({
        name,
        description,
        duration,
        price,
        startDate,
        professor: { id: professorId },
      });
      const res = await this.subjectRepository.save(newSubject);
      return res;
    } catch (error) {
      this.handleDbError(error, this.logger);
    }
  }

  findAll() {
    return this.subjectRepository.find();
  }

  async findOne(id: number) {
    try {
      const subject = await this.subjectRepository.findOneOrFail({
        where: { id },
      });
      return subject;
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

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    try {
      const { name, description, duration, price, startDate, professorId} = updateSubjectDto;
      const subjectToUpdate = await this.subjectRepository.preload({
        id,
        name,
        description,
        duration,
        price,
        startDate,
        professor:{id:professorId}
      });

      const subjectSaved = await this.subjectRepository.save(
        subjectToUpdate
      );

      return subjectSaved;
    } catch (error) {
      this.handleDbError(error, this.logger);
    }
  }

 

  async remove(id: number) {
    try {
      const subjectToDeleted = await this.findOne(id);
      await this.subjectRepository.delete(id);
      return subjectToDeleted;
    } catch (error) {
      this.handleDbError(error, this.logger);
    }
  }

  async getByName(name: string) {
    try {
      const subject = await this.subjectRepository.find({
        where: { name },
      });
      return subject;
    } catch (error) {
      this.handleDbError(
        {
          code: 'error-001',
          detail: `${name} not Found`,
        },
        this.logger,
      );
    }
  }

  async getSubjectsByProfessorId(id: number) {
    try {
      const subjects = await this.subjectRepository.find({
        where: { professor: { id } },
      });
      return subjects;
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

  async getPriceGreaterThan(price: number) {
    try {
      const subjects = await this.subjectRepository.find({
        where: { price: MoreThan(price) },
      });
      return subjects;
    } catch (error) {
      this.handleDbError(
        {
          code: 'error-001',
          detail: ` not Found`,
        },
        this.logger,
      );
    }
  }

  handleDbError(error: any, logger: Logger) {

    switch (error.code) {
      case 'ER_NO_REFERENCED_ROW_2':
        throw new BadRequestException("The profesor's id don´t exist in database");
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
