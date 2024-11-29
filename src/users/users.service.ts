import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async updateProblemsFlag(): Promise<{ updated: number; usersWithProblem: number }> {
    const usersWithProblem = await this.prisma.user.count({ where: { problems: true } });

    const updateResult = await this.prisma.user.updateMany({
      where: { problems: true },
      data: { problems: false },
    });

    return {
      updated: updateResult.count,
      usersWithProblem,
    };
  }
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        age: createUserDto.age,
        gender: createUserDto.gender,
        problems: createUserDto.problems,
      },
    });
  }
}
