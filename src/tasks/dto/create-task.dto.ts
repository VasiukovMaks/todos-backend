import { Category } from "src/categories/category.entity"

export class CreateTaskDto {
  readonly text: string
  readonly category: Category
}