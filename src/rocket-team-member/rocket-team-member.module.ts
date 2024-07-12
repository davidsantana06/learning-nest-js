import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RocketTeamMemberController } from './rocket-team-member.controller';
import { RocketTeamMemberRepository } from './rocket-team-member.repository';
import { RocketTeamMemberService } from './rocket-team-member.service';
import { FoundRocketTeamMemberMiddleware } from './middlewares/found-rocket-team-member.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [RocketTeamMemberController],
  providers: [RocketTeamMemberRepository, RocketTeamMemberService],
})
export class RocketTeamMemberModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FoundRocketTeamMemberMiddleware)
      .forRoutes(
        { path: '/rocket-team-member/:id', method: RequestMethod.PATCH },
        { path: '/rocket-team-member/:id', method: RequestMethod.DELETE },
      );
  }
}
