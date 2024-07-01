import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
import { AppService } from './app.service';

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
