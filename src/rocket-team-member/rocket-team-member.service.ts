import { Injectable } from '@nestjs/common';
import { CreateRocketTeamMemberDto } from './dto/create-rocket-team-member.dto';
import { UpdateRocketTeamMemberDto } from './dto/update-rocket-team-member.dto';
import { RocketTeamMember } from './entities/rocket-team-member.entity';
import { RocketTeamMemberRepository } from './rocket-team-member.repository';

@Injectable()
export class RocketTeamMemberService {
  constructor(
    private readonly rocketTeamMemberRepository: RocketTeamMemberRepository,
  ) {}

  findMany(): Promise<RocketTeamMember[]> {
    return this.rocketTeamMemberRepository.findMany();
  }

  findUnique(id: string): Promise<RocketTeamMember> {
    return this.rocketTeamMemberRepository.findUnique(id);
  }

  create(
    createRocketTeamMemberDto: CreateRocketTeamMemberDto,
  ): Promise<RocketTeamMember> {
    return this.rocketTeamMemberRepository.create(createRocketTeamMemberDto);
  }

  async update(
    id: string,
    updateRocketTeamMemberDto: UpdateRocketTeamMemberDto,
  ): Promise<RocketTeamMember> {
    return this.rocketTeamMemberRepository.update(
      id,
      updateRocketTeamMemberDto,
    );
  }

  async delete(id: string): Promise<RocketTeamMember> {
    return this.rocketTeamMemberRepository.delete(id);
  }
}
