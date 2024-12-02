import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../users/user/user';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride('roles', [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            // No roles required, allow access
            return true;
        }

        const { user } = context.switchToHttp().getRequest();
        return user && requiredRoles.includes(user.role);
    }
}