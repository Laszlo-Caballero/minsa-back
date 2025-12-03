import { User } from '../../users/entities/user.entity';
import { Cita } from '../../citas/entities/cita.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

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

  @OneToMany(() => Cita, (cita) => cita.obstetra)
  citas: Cita[];

  @OneToOne(() => User, (user) => user.obstetra)
  @JoinColumn()
  user: Relation<User>;
}
