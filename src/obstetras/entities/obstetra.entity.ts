import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Obstetra {
  @PrimaryGeneratedColumn()
  IdObstetra: number;
  @Column()
  dni: number;
  @Column()
  nombres: string;
  @Column()
  apellidos: string;
  @Column()
  fecha_nacimiento: Date;
  @Column()
  correo: string;
  @Column()
  telefono: number;
  @Column()
  CMP: string;
  @Column()
  especialidad: string;
  @Column()
  estado: boolean;
}
