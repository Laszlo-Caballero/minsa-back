import { Cita } from '../../citas/entities/cita.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  IdPaciente: number;
  @Column()
  dni: number;
  @Column()
  nombre: string;
  @Column()
  apellidos: string;
  @Column()
  fecha_nacimiento: Date;
  @Column()
  correo: string;
  @Column()
  telefono: number;
  @Column()
  direccion: string;

  @OneToMany(() => Cita, (cita) => cita.paciente)
  citas: Cita[];
}
