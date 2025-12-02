import { Cita } from '../../citas/entities/cita.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Programa {
  @PrimaryGeneratedColumn()
  programaId: number;
  @Column()
  nombrePrograma: string;
  @Column()
  codigo: string;
  @Column()
  duracion: number;
  @Column()
  estado: boolean;
  @Column()
  descripcion: string;
  @Column()
  requisitos: string;

  @OneToMany(() => Cita, (cita) => cita.programa)
  citas: Cita[];
}
