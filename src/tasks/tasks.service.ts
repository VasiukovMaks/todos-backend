import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>
  ) {}

  async getAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getById(id:string): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async create(taskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.taskRepository.create(taskDto);
    return this.taskRepository.save(newTask)
  }

  async update(id: string, taskDto: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, taskDto);
    return this.taskRepository.findOne(id);
  }

  async remove(id: string): Promise<Task> {
    await this.taskRepository.delete(id);
    return this.taskRepository.findOne(id);
  }

}
