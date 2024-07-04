import { IsString, MaxLength, MinLength } from 'class-validator';
import { RocketTeamMember } from '../entities/rocket-team-member.entity';

export class CreateRocketTeamMemberDto extends RocketTeamMember {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  profession: string;
}
