import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user'; // Import User entity

@Module({
    imports: [TypeOrmModule.forFeature([User])], // Register User entity
})

export class UsersModule { }