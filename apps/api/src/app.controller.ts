import { Controller, Get, Inject, Post } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy
  ) {}

  @Get()
  async getUsers() {
    return this.authService.send(
      {
        cmd: 'get-users',
      },
      {}
    )
  }
  @Post()
  async postUser() {
    return this.authService.send(
      {
        cmd: 'post-user'
      },
      {},
    )
  }
 
}
