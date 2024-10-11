import { Professor } from 'src/model/professors/entities/professor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  duration: number;

  @Column('double')
  price: number;

  @Column('date')
  startDate: Date;

  @ManyToOne(() => Professor, (professor) => professor.subjects,{eager:true})
  professor: Professor;
}
