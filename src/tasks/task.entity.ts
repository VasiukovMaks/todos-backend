import { Category } from "src/categories/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  isCompleted: boolean;

  @ManyToOne(() => Category, category => category.tasks)
  category: Category
}