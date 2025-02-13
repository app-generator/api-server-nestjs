import { Controller, Get, Post, Body, Param, UseGuards, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard) 
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard) 
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)  // Optionally, use the guard to secure the route
  async updateUser(
    @Param('id') id: number, 
    @Body() user: Partial<User>,
    @Req() req
  ): Promise<User> {
    const existingUser = await this.usersService.findOne(id);
    if (!existingUser) {
      throw new Error(`User with ID ${id} not found`);
    }

    // Update the user's information
    const updatedUser = await this.usersService.updateUser(id, user);
    return updatedUser;
  }

  @Put(':id/role')
  @UseGuards(JwtAuthGuard)
  async updateRole(
    @Param('id') id: number,
    @Body('role') role: string,
    @Req() req
  ): Promise<User> {
    return this.usersService.updateUserRole(+id, role);
  }
}
