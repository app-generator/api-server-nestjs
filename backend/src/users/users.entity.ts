import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({nullable: true})
  lastName: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column()
  country: string;

  @Column()
  address: string;

  @Column()
  job: string;

  @Column()
  email: string;

  @Column({ unique: true, nullable: true })
  github_id: string;

  @Column()
  role: string;
}
