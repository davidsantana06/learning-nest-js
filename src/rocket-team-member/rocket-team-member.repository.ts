import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRocketTeamMemberDto } from './dto/create-rocket-team-member.dto';
import { UpdateRocketTeamMemberDto } from './dto/update-rocket-team-member.dto';
import { RocketTeamMember } from './entities/rocket-team-member.entity';

@Injectable()
export class RocketTeamMemberRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany(): Promise<RocketTeamMember[]> {
    return this.prisma.rocketTeamMember.findMany();
  }

  findUnique(id: string): Promise<RocketTeamMember> {
    return this.prisma.rocketTeamMember.findUnique({
      where: { id },
    });
  }

  create(data: CreateRocketTeamMemberDto): Promise<RocketTeamMember> {
    return this.prisma.rocketTeamMember.create({ data });
  }

  update(
    id: string,
    data: UpdateRocketTeamMemberDto,
  ): Promise<RocketTeamMember> {
    return this.prisma.rocketTeamMember.update({
      where: { id },
      data,
    });
  }

  delete(id: string): Promise<RocketTeamMember> {
    return this.prisma.rocketTeamMember.delete({
      where: { id },
    });
  }
}
