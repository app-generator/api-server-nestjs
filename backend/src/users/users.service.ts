import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    page: number,
    size: number,
    search?: string,
  ): Promise<{
    data: User[];
    meta: {
      totalItems: number;
      itemsPerPage: number;
      currentPage: number;
      totalPages: number;
    };
  }> {
    const searchClause = search
      ? {
          OR: [
            { firstName: { contains: search } },
            { lastName: { contains: search } },
            { email: { contains: search } },
          ],
        }
      : {};

    const paginatedUsers = await this.prisma.user.findMany({
      where: searchClause,
      take: size,
      skip: (page - 1) * size,
      orderBy: {
        id: 'asc',
      },
    });
    const totalUsers = await this.prisma.user.count({ where: searchClause });

    return {
      data: paginatedUsers,
      meta: {
        totalItems: totalUsers,
        itemsPerPage: size,
        currentPage: page,
        totalPages: Math.ceil(totalUsers / size),
      },
    };
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
