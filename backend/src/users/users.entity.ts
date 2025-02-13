import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey({autoincrement: true})
  id: number;

  @Property()
  firstName: string;

  @Property({nullable: true})
  lastName: string;

  @Property({ type: 'text', nullable: true })
  bio: string;

  @Property()
  country: string;

  @Property()
  address: string;

  @Property()
  job: string;

  @Property()
  email: string;

  @Property({ unique: true, nullable: true })
  github_id: string;

  @Property()
  role: string;
}
