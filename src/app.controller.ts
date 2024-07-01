import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create-member')
  async createMember(@Body() body: CreateTeamMemberBody) {
    console.log(body);
    const { name, func } = body;
    await this.appService.createMember(name, func);
  }
}
