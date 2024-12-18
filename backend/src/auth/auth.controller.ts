import { Controller, Get, Req, Res, UseGuards, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService, private usersService: UsersService,) {}

  @Get('login')
  @UseGuards(AuthGuard('auth0'))
  login() {
    // This route triggers the redirect to Auth0
  }

  @Get('callback')
  @UseGuards(AuthGuard('auth0'))
  async callback(@Req() req, @Res() res) {
    // Successful authentication, redirect to the app homepage
    const user = req.user;

    const newUserDetails = {
      firstName: user.name || user.username, // GitHub nickname as first name
      lastName: user.email.match(/^[^@]+/)[0], 
      email: user.email || `user_${user.id}@example.com`, // Unique fallback email if not provided
      github_id: user.id, // Store the GitHub ID for future logins
      bio: 'An enterprising Serial Entrprenuer', // Dummy bio
      job: "Entrepreneur",
      address: "234 Main St, Springfield",
      country: 'USA', // Placeholder location
    };

    let existingUser = await this.usersService.findUserByGithubId(user.id);
    if (!existingUser) {
      console.log('User not found, creating new user...');
      existingUser = await this.usersService.createUser(newUserDetails);
    } else {
      console.log('User already exists, skipping user creation.');
    }

    user.id = existingUser.id;
    user.role = existingUser.role

    // Generate JWT token
    const token = this.jwtService.sign(user);
    user.auth_token = token

    res.redirect(`http://localhost:4000/free/usermanagement?user=${JSON.stringify(user)}`);
  }

  @Get('logout')
  logout(@Req() req, @Res() res) {
    req.logout(() => res.redirect('/'));
  }
}
 