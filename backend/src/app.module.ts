import { Module } from '@nestjs/common';
   import { TypeOrmModule } from '@nestjs/typeorm';

   @Module({
     imports: [
       TypeOrmModule.forRoot({
         type: 'postgres', // Database type
         host: 'localhost', // Your database host
         port: 5432,        // Your database port
         username: 'your_db_username', // Replace with your DB username
         password: 'your_db_password', // Replace with your DB password
         database: 'your_db_name',     // Replace with your DB name
         entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entities path
         synchronize: true, // Auto-sync entities with the database 
       }),
     ],
   })
   export class AppModule {}