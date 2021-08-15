import { User } from 'src/users/user.entity';

export class CreateCategoryDto {
  readonly title: string;
  readonly user: User;
}
