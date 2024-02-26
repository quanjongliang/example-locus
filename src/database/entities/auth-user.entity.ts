import { Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum USER_ROLE {
  ADMIN = 'admin',
  NORMAL = 'normal',
  LIMITED = 'limited',
}

@Entity({ name: 'auth_user' })
export class AuthUser {
  @PrimaryGeneratedColumn()
  id: number;

  role: USER_ROLE;
  //   get role {}
}
