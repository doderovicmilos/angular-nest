import { UserRoles } from './userRoles';
import { Company } from 'src/companies/entities/companies/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

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

  @ManyToMany(()=> Company)
  @JoinTable()
  companies: Company[];
}
