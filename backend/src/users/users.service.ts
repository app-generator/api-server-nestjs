import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async createUser(user: User): Promise<User> {
    return this.prisma.user.create({ data: { ...user, role: 'user' } });
  }

  async updateUserRole(id: number, role: string): Promise<User> {
    await this.prisma.user.update({ where: { id }, data: { role } });
    return this.prisma.user.findFirst({ where: { id } });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  async findUserByGithubId(githubId: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { github_id: githubId } });
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    await this.prisma.user.update({ data: userData, where: { id } }); // Update the user
    return this.prisma.user.findFirst({ where: { id: id } }); // Return the updated user
  }
}
