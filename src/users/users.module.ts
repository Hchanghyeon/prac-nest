import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { EmailService } from 'src/email/email.service';
import { UserEntity } from './entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [EmailModule, TypeOrmModule.forFeature([UserEntity])],
    controllers: [UsersController],
    providers:[UsersService],
})
export class UsersModule {}


