import { Subject } from 'src/model/subjects/entities/subject.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { unique: true })
  document: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @OneToMany(() => Subject, (subject) => subject.professor)
  subjects: Subject[];
}
