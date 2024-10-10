import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { ProfessorsController } from './professors.controller';
import { DataSource } from 'typeorm';
import { Professor } from './entities/professor.entity';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [ProfessorsController,],
  providers: [ProfessorsService,
    {
      provide: 'PROFESSOR_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Professor),
      inject: ['DATA_SOURCE'],
    }
  ],
})
export class ProfessorsModule {}
