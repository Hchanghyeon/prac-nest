import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EmailService } from './email/email.service';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';

console.log(`${__dirname}/config/env/.${process.env.NODE_ENV}.env`);
@Module({
  imports: [UsersModule,
    ConfigModule.forRoot({
      envFilePath:[`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load:[emailConfig],
      isGlobal:true,
      validationSchema
    })
  ],
  controllers: [],
  providers:[],
})


export class AppModule {}
