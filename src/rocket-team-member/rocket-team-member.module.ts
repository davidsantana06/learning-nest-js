import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RocketTeamMemberController } from './rocket-team-member.controller';
import { RocketTeamMemberRepository } from './rocket-team-member.repository';
import { RocketTeamMemberService } from './rocket-team-member.service';

@Module({
  imports: [PrismaModule],
  controllers: [RocketTeamMemberController],
  providers: [RocketTeamMemberRepository, RocketTeamMemberService],
})
export class RocketTeamMemberModule {}
