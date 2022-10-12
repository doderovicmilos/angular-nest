import { User } from 'src/users/entities/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  address: string;
}