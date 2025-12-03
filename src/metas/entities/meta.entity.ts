import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meta {
  @PrimaryGeneratedColumn()
  metaId: number;

  @Column()
  objetivo: string;

  @Column()
  descripcion: string;

  @Column({ default: 'Activo' })
  estado: string;

  @Column({ type: 'datetime', default: () => 'GETDATE()' })
  createdAt: Date;
}
