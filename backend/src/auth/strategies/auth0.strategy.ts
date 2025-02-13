import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-auth0';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, 'auth0') {
  constructor() {
    super({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/callback',
      scope: 'openid email profile',
      state: false
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {    
    const user = {
      id: profile.id,
      email: profile.emails ? profile.emails[0].value : '',
      name: profile.nickname,
      accessToken,
    };
    
    done(null, user);
  }
}
