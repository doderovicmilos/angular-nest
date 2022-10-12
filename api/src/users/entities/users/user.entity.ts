import { UserRoles } from './userRoles';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  username: string;
  
  @Column({
    type: 'set',
    enum: UserRoles,
    default: [UserRoles.USER]
  })
  roles: UserRoles[];
}
