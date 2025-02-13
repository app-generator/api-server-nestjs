import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard) 
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async createUser(@Body() user: Partial<User>): Promise<User> {
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
  ): Promise<User> {
    return this.usersService.updateUserRole(id, role);
  }
}
