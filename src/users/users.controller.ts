import { Body, Controller, Patch, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('reset-problems')
  async resetProblemsFlag() {
    const result = await this.usersService.updateProblemsFlag()
    return result
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }
}
