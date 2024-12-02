import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User, Role } from './user/user';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    // Find all users with pagination
    async findAll(page: number, limit: number): Promise<User[]> {
        return this.usersRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            select: ['id', 'name', 'surname', 'bio', 'country', 'address', 'job'],
        });
    }

    // Find a user by ID
    async findById(id: number): Promise<User> {
        return this.usersRepository.findOne({
            where: { id },
            select: ['id', 'name', 'surname', 'bio', 'country', 'address', 'job'],
          });
    }

    // Find or create a user by 'sub' (Auth0 identifier)
    async findOrCreate(userData: Partial<User>): Promise<User> {
        let user = await this.usersRepository.findOne({
            where: { sub: userData.sub }, 
          });
        if (!user) {
            user = this.usersRepository.create(userData);
            user.role = Role.USER;
            await this.usersRepository.save(user);
        }
        return user;
    }

    // Update an existing user
    async update(id: number, userData: Partial<User>): Promise<User> {
        await this.usersRepository.update(id, userData);
        return this.usersRepository.findOne({ where: { id } });
    }

    // Delete a user
    async delete(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}