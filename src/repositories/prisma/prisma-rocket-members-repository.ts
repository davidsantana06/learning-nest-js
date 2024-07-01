import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocket-members-repository';
import { randomUUID } from 'node:crypto';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prismaService: PrismaService) {}

  async create(name: string, func: string): Promise<void> {
    await this.prismaService.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: func,
      },
    });
  }
}
