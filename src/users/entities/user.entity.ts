import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enum/enum';
import { Obstetra } from '../../obstetras/entities/obstetra.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;
  @Column()
  username: string;
  @Column()
  password: string;

  @Column({ default: UserRole.OBSTETRA })
  role: string;

  @OneToOne(() => Obstetra, (obstetra) => obstetra.user)
  obstetra: Obstetra;
}
