import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('/app')
export class AppController {
  constructor(
    private readonly rocketMembersRepository: RocketMembersRepository,
  ) {}

  @Post('/create-member')
  async createMember(@Body() body: CreateTeamMemberBody) {
    console.log(body);
    const { name, func } = body;
    await this.rocketMembersRepository.create(name, func);
  }
}
