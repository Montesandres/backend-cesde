import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { Subject } from './entities/subject.entity';
import { DataSource } from 'typeorm';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [SubjectsController],
  providers: [SubjectsService,
    {
      provide: 'SUBJECT_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Subject),
      inject: ['DATA_SOURCE'],
    }
  ],
})
export class SubjectsModule {}
