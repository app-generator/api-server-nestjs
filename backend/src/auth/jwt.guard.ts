import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization']; // Get the Authorization header

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('No Bearer token found in Authorization header');
      return false; // No Authorization header or it doesn't start with "Bearer"
    }

    const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

    if (!token) {
      console.log('Bearer token not found after Bearer keyword');
      return false; // No token found after "Bearer"
    }

    try {
      const user = this.jwtService.verify(token); // Verify the token
      request.user = user; // Attach the user data to the request object
      console.log('Valid user', user, 'with token', token);
      return true; // Token is valid, allow the request to proceed
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return false; // Token is invalid or expired
    }
  }
}
