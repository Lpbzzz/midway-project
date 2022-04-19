export interface User {
  id: number;
  name: string;
  age: number;
}
import { Body, Controller, Get, Post, Query } from '@midwayjs/decorator';

@Controller('/api/user')
export class UserController {
  @Get('/')
  async getUser(@Query('id') id: string): Promise<User> {
    console.log(id);
    return {
      id: Number(id),
      name: 'John',
      age: 18,
    };
  }
  @Post('/')
  async getUserPost(@Body('id') key: User): Promise<User> {
    console.log('key', key);
    return {
      id: Number(key) + 333,
      name: 'John-2-3-4',
      age: 18,
    };
  }
}
