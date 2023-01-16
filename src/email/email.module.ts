import { Module } from '@nestjs/common';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { EmailService } from './email.service';

@Module({
    providers:[EmailService],
    exports:[EmailService]
})
export class EmailModule {}
