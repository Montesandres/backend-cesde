import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { SubjectsModule } from './model/subjects/subjects.module';
import { ProfessorsModule } from './model/professors/professors.module';

@Module({
  imports: [DatabaseModule, SubjectsModule, ProfessorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
