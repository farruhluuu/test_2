import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service'; // Импортируйте PrismaService
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, PrismaService], // Добавьте PrismaService сюда
  controllers: [UsersController],
})
export class UsersModule {}