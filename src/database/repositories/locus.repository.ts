import { Injectable } from '@nestjs/common';
import { LOCUS_SIDE_LOADING, ListLocusDTO } from 'src/domain/locus/dto';
import { DataSource } from 'typeorm';
import { Locus, LocusMember, USER_ROLE } from '../entities';
import { BaseRepository } from './base.repository';

@Injectable()
export class LocusRepository extends BaseRepository<Locus> {
  constructor(dataSource: DataSource) {
    super(Locus, dataSource);
  }

  public list(listDto: ListLocusDTO) {
    const queryBuilder = this._buildQuery(
      listDto,
      this.createQueryBuilder('locus'),
    );

    switch (listDto.userRole) {
      case USER_ROLE.ADMIN:
        if (listDto.sideLoading === LOCUS_SIDE_LOADING.ENABLED) {
          queryBuilder.leftJoinAndSelect('locus.locusMembers', 'locusMembers');
          // queryBuilder.leftJoinAndSelect(
          //   (subQuery) => {
          //     return subQuery.select().from(LocusMember, 'locusMember').take(1);
          //   },
          //   'locusMember',
          //   'locusMember.locusId = locus.id',
          // );
        }
        break;
      case USER_ROLE.LIMITED:
        queryBuilder.innerJoin(
          'locus.locusMembers',
          'locusMembers',
          'locusMembers.regionId IN (86118093, 86696489, 88186467)',
        );
        break;
      default:
        break;
    }
    return queryBuilder.getRawMany();
  }
}
