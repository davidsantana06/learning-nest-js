import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100, {
    message: 'The member name should be between 5 and 100 characters'
  })
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.'
  })
  func: string;
}
