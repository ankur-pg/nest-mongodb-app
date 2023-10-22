import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async create(createUserDto: CreateUserDto) {
      const user = new User()
      user.email = createUserDto.email
      user.name = createUserDto.name
      user.date = new Date()

      return await this.userRepository.save(user)
    }

    async findAll() {
      return await this.userRepository.find()
    }
}
