import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posta {
  @PrimaryGeneratedColumn()
  postaId: number;

  @Column()
  nombre: string;
}
