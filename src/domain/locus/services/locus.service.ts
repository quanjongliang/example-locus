import { Injectable } from '@nestjs/common';
import { AuthUser, LocusRepository } from 'src/database';
import { ListLocusDTO } from '../dto';

@Injectable()
export class LocusService {
  constructor(private _locusRepository: LocusRepository) {}
  async list(listDto: ListLocusDTO, user: AuthUser) {
    listDto.userRole = user?.role;
    return this._locusRepository.list(listDto);
  }
}
