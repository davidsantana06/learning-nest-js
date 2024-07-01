export abstract class RocketMembersRepository {
  abstract create(name: string, func: string): Promise<void>;
}
