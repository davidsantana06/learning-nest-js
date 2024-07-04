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

  @Get('/')
  async findMany() {
    return await this.rocketTeamMemberService.findMany();
  }

  @Post('/')
  async create(@Body() createRocketTeamMemberDto: CreateRocketTeamMemberDto) {
    const createdUser = await this.rocketTeamMemberService.create(
      createRocketTeamMemberDto,
    );
    return createdUser;
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateRocketTeamMemberDto: UpdateRocketTeamMemberDto,
    @Res() res: Response,
  ) {
    const rocketTeamMemberExists =
      await this.rocketTeamMemberService.findUnique(id);
    if (!rocketTeamMemberExists)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Membro Rocket não encontrado' });
    await this.rocketTeamMemberService.update(id, updateRocketTeamMemberDto);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Membro Rocket atualizado' });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const rocketTeamMemberExists =
      await this.rocketTeamMemberService.findUnique(id);
    if (!rocketTeamMemberExists)
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Membro Rocket não encontrado' });
    await this.rocketTeamMemberService.delete(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Membro Rocket deletado' });
  }
}
