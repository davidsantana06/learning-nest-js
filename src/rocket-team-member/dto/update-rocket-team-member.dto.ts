import { PartialType } from '@nestjs/mapped-types';
import { CreateRocketTeamMemberDto } from './create-rocket-team-member.dto';

export class UpdateRocketTeamMemberDto extends PartialType(
  CreateRocketTeamMemberDto,
) {}
