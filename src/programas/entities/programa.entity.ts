import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
