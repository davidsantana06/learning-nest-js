import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RocketTeamMemberService } from '../rocket-team-member.service';

@Injectable()
export class FoundRocketTeamMemberMiddleware implements NestMiddleware {
  constructor(private readonly rocketTeamMemberService: RocketTeamMemberService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const foundRocketTeamMember = await this.rocketTeamMemberService.findOne(id);
    if (!foundRocketTeamMember)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Membro Rocket não encontrado' });
    req['rocketTeamMember'] = foundRocketTeamMember;
    next();
  }
}
