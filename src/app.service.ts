import { Injectable } from '@nestjs/common';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Injectable()
export class AppService {
  constructor(
    private readonly rocketMembersRepository: RocketMembersRepository,
  ) {}

  async createMember(name: string, func: string): Promise<void> {
    await this.rocketMembersRepository.create(name, func);
  }
}
