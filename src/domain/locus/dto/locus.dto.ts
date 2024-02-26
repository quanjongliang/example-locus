import { Type } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { USER_ROLE } from 'src/database';
import { BasePaginationDTO } from 'src/shared/base.dto';

export enum LOCUS_SIDE_LOADING {
  ENABLED = 1,
  DISABLED = 0,
}

export class ListLocusDTO extends BasePaginationDTO {
  @IsOptional()
  take = 1000;

  @IsOptional()
  skip = 0;

  @IsEnum(LOCUS_SIDE_LOADING)
  @Type(() => Number)
  @IsOptional()
  sideLoading: LOCUS_SIDE_LOADING;

  userRole: USER_ROLE;
}
