import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserType } from '../../types/userTypes';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  type: UserType;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @CreateDateColumn()
  registered: Date;
}
