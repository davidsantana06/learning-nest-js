import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateRocketTeamMemberDto } from './dto/create-rocket-team-member.dto';
import { UpdateRocketTeamMemberDto } from './dto/update-rocket-team-member.dto';
import { RocketTeamMemberService } from './rocket-team-member.service';

@Controller('/rocket-team-member')
export class RocketTeamMemberController {
  constructor(
    private readonly rocketTeamMemberService: RocketTeamMemberService,
  ) {}

  @Post('/')
  create(@Body() createRocketTeamMemberDto: CreateRocketTeamMemberDto) {
    return this.rocketTeamMemberService.create(createRocketTeamMemberDto);
  }

  @Get('/')
  findAll() {
    return this.rocketTeamMemberService.findAll();
  }

  @Get('/:id')
  findOne(@Req() req: Request) {
    return req['rocketTeamMember'];
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateRocketTeamMemberDto: UpdateRocketTeamMemberDto,
    @Res() res: Response,
  ) {
    this.rocketTeamMemberService.update(id, updateRocketTeamMemberDto);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Membro Rocket atualizado' });
  }

  @Delete('/:id')
  remove(@Param('id') id: string, @Res() res: Response) {
    this.rocketTeamMemberService.remove(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Membro Rocket deletado' });
  }
}
