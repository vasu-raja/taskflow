import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | undefined | null> {
    const isEmailExist = await this.userRepo.findOne({ where: { email } });
    return isEmailExist ?? undefined;
  }

  async create(
    name: string,
    email: string,
    hashedPassword: string
  ): Promise<User> {
    const user = this.userRepo.create({
      name,
      email,
      password: hashedPassword,
    });
    return this.userRepo.save(user);
  }
}
