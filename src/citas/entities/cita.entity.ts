import { Paciente } from '../../pacientes/entities/paciente.entity';
import { Programa } from '../../programas/entities/programa.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Obstetra } from '../../obstetras/entities/obstetra.entity';
import { Atencion } from '../../atencion/entities/atencion.entity';

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

  @OneToMany(() => Atencion, (atencion) => atencion.cita)
  atenciones: Relation<Atencion>[];
}
