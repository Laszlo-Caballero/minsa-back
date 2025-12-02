import { Paciente } from '../../pacientes/entities/paciente.entity';
import { Programa } from '../../programas/entities/programa.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Obstetra } from '../../obstetras/entities/obstetra.entity';

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  citaId: number;

  @Column({ type: 'datetime' })
  fecha_cita: Date;

  @Column()
  estado: string;

  @Column()
  motivo: string;

  @ManyToOne(() => Programa, (programa) => programa.citas)
  programa: Relation<Programa>;

  @ManyToOne(() => Paciente, (paciente) => paciente.citas)
  paciente: Paciente;

  @ManyToOne(() => Obstetra, (obstetra) => obstetra.citas)
  obstetra: Relation<Obstetra>;
}
