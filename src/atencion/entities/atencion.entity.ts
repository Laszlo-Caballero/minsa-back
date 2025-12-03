import { Cita } from '../../citas/entities/cita.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class Atencion {
  @PrimaryGeneratedColumn()
  atencionId: number;

  @Column({ default: () => 'GETDATE()' })
  fecha_atencion: Date;

  @Column({ length: 'max' })
  diagnostico: string;

  @Column()
  nota_clinica: string;

  @Column({ default: 'Activo' })
  estado: string;

  @ManyToOne(() => Cita, (cita) => cita.atenciones)
  cita: Relation<Cita>;
}
