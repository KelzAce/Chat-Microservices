import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
 constructor(
@InjectRepository(UserEntity) private readonly userReposity: Repository<UserEntity>
 ) {}

 async getUsers() {
  return this.userReposity.find()
 }

 async postUser() {
  return this.userReposity.save({ name: 'Larry'})
 }
}
