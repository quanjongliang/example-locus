import { IsOptional } from 'class-validator';

export class BasePaginationDTO {
  @IsOptional()
  take?: number = 10;

  @IsOptional()
  skip?: number = 0;

  @IsOptional()
  sortColumn?: string;

  @IsOptional()
  sortOrder?: 'DESC' | 'ASC';
}
