import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthUser, USER_ROLE } from 'src/database';
import { CurrentUser } from 'src/domain/auth/decorators';
import { ListLocusDTO } from '../../dto';
import { LocusService } from '../../services';

@Controller('locus')
@UsePipes(new ValidationPipe({ always: true, transform: true }))
export class LocusController {
  constructor(private _locusService: LocusService) {}

  @Get()
  //   Auth
  public async list(
    @CurrentUser() user: AuthUser,
    @Query() listDto: ListLocusDTO,
  ) {
    return this._locusService.list(listDto, {
      role: USER_ROLE.ADMIN,
    } as AuthUser);
  }
}
