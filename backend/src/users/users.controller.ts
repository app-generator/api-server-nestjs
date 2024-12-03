import {
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Body,
    UseGuards,
    Request,
    Query,
    ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from './user/user';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    // Public Access: Get all users with pagination
    @Get()
    async getAll(@Query('page') page = 1, @Query('limit') limit = 10) {
        return this.usersService.findAll(page, limit);
    }

    // Public Access: Get a user by ID
    @Get(':id')
    getById(@Param('id') id: number) {
        return this.usersService.findById(id);
    }

    // Private Access: Update user information
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN)
    @Put(':id')
    async update(@Param('id') id: number, @Body() userData, @Request() req) {
        const userId = req.user.id;
        if (userId !== +id && req.user.role !== Role.ADMIN) {
            throw new ForbiddenException('You can only update your own profile');
        }
        return this.usersService.update(id, userData);
    }

    // Private Access: Delete a user
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.usersService.delete(id);
        return { message: 'User deleted successfully' };
    }
}