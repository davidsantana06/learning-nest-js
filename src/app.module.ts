import { Module } from '@nestjs/common';
import { RocketTeamMemberModule } from './rocket-team-member/rocket-team-member.module';

@Module({
  imports: [RocketTeamMemberModule],
})
export class AppModule {}
