import { Category } from 'src/categories/category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  fname: string;

  @Column({
    nullable: true,
  })
  mname: string;

  @Column({
    nullable: true,
  })
  lname: string;

  @Column()
  email: string;

  @Column()
  pass: string;

  @OneToMany(() => Category, (category) => category.user)
  categories: Category[];
}
