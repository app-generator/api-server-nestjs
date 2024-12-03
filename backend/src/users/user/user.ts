import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    sub: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({ nullable: true })
    bio: string;

    @Column({ nullable: true })
    country: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    job: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    password: string; // Password may be null if using social login
}
