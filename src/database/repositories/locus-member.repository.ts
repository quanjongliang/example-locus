import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { LocusMember } from '../entities';
import { BaseRepository } from './base.repository';

@Injectable()
export class LocusMemberRepository extends BaseRepository<LocusMember> {
  constructor(dataSource: DataSource) {
    super(LocusMember, dataSource);
  }
}
