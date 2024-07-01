import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocket-members-repository';

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
