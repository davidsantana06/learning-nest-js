import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
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
    const createdUser = this.rocketTeamMemberService.create(
      createRocketTeamMemberDto,
    );
    return createdUser;
  }

  @Get('/')
  findAll() {
    return this.rocketTeamMemberService.findAll();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateRocketTeamMemberDto: UpdateRocketTeamMemberDto,
    @Res() res: Response,
  ) {
    await this.rocketTeamMemberService.update(id, updateRocketTeamMemberDto);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Membro Rocket atualizado' });
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.rocketTeamMemberService.remove(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Membro Rocket deletado' });
  }
}
