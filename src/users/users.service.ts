import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['categories'],
    });
  }

  async getById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async getByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(userDto);
    return this.userRepository.save(newUser);
  }

  async update(id: string, userDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, userDto);
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<User> {
    await this.userRepository.delete(id);
    return this.userRepository.findOne(id);
  }
}
