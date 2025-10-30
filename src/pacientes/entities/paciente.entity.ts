import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
