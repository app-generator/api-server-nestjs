import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SqliteDriver } from '@mikro-orm/sqlite';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      dbName: process.env.DB_NAME ? process.env.DB_NAME + ".db" : 'database.db', // this is for SQLite, if you use other database, change this
      driver: SqliteDriver,
      allowGlobalContext: true,
      persistOnCreate: true,
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule, AuthModule
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule { }
