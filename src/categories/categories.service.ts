import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, DeleteResult, Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAll(id: string): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: ['tasks'],
      where: { user: id },
      order: { id: 1 },
    });
  }

  async getById(id: string): Promise<Category | undefined> {
    return await this.categoryRepository.findOne(id, { relations: ['tasks'] });
  }

  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepository.create(categoryDto);
    return this.categoryRepository.save(newCategory);
  }

  async update(id: string, categoryDto: UpdateCategoryDto): Promise<Category> {
    await this.categoryRepository.update(id, categoryDto);
    return this.categoryRepository.findOne(id);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.categoryRepository.delete(id);
  }
}
