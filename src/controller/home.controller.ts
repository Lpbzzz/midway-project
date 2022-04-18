import { Controller, Get, Post } from '@midwayjs/decorator';

@Controller('/a')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }

  @Post('/update')
  async updateData() {
    return 'This is a post method';
  }
}
