import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  // This hook runs when the app boots up
  async onApplicationBootstrap() {
    const userCount = await this.userRepository.count();
    if (userCount === 0) {
      await this.seedDatabase();
    }
  }

  async seedDatabase() {
    const dummyUsers = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        bio: 'A passionate software developer.',
        country: 'USA',
        address: '123 Main St, Springfield',
        job: 'Frontend Developer',
        email: 'alice@example.com',
        role: 'user'
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Smith',
        bio: 'DevOps specialist with a knack for automation.',
        country: 'Canada',
        address: '456 Maple Ave, Toronto',
        job: 'DevOps Engineer',
        email: 'bob@example.com',
        role: 'user'
      },
      {
        id: 3,
        firstName: 'Charlie',
        lastName: 'Brown',
        bio: 'Creative designer focused on UX/UI.',
        country: 'UK',
        address: '789 High St, London',
        job: 'UI/UX Designer',
        email: 'charlie@example.com',
        role: 'user'
      },
      {
        id: 4,
        firstName: 'Dana',
        lastName: 'White',
        bio: 'Experienced backend engineer specializing in Node.js.',
        country: 'Australia',
        address: '321 Ocean Dr, Sydney',
        job: 'Backend Engineer',
        email: 'dana@example.com',
        role: 'user'
      },
      {
        id: 5,
        firstName: 'Eve',
        lastName: 'Adams',
        bio: 'Product manager with over 10 years of experience.',
        country: 'Germany',
        address: '654 Gartenstr, Berlin',
        job: 'Product Manager',
        email: 'eve@example.com',
        role: 'user'
      }
    ];

    await this.userRepository.save(dummyUsers);
    console.log('Database seeded with dummy users.');
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      order: {
        id: 'ASC', 
      },
    });
  }

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create({...user, role: "user"});
    return this.userRepository.save(newUser);
  }

  async updateUserRole(id: number, role: string): Promise<User> {
    await this.userRepository.update(id, { role });
    return this.userRepository.findOneBy({id});
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  async findUserByGithubId(githubId: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { github_id: githubId } });
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, userData); // Update the user
    return this.userRepository.findOne({where: {id: id}}); // Return the updated user
  }
}
