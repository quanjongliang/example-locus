import { BasePaginationDTO } from 'src/shared';
import { Repository, DataSource, EntityTarget } from 'typeorm';

export abstract class BaseRepository<T> extends Repository<T> {
  private _target: EntityTarget<T>;

  constructor(target: EntityTarget<T>, _baseDataSource: DataSource) {
    super(target, _baseDataSource.createEntityManager());
    this._target = target;
  }

  get columns() {
    return (
      this.manager.connection
        .getMetadata(this._target)
        .columns.map((column) => column.propertyName) || []
    );
  }

  protected _buildQuery(
    baseDto: BasePaginationDTO,
    queryBuilder = this.createQueryBuilder(),
  ) {
    const { skip, take, sortColumn, sortOrder = 'DESC', ...rest } = baseDto;
    const columns = this.columns;
    if (skip) {
      queryBuilder.skip(skip);
    }
    if (take) {
      queryBuilder.take(take);
    }
    if (sortColumn) {
      queryBuilder.orderBy(sortColumn, sortOrder);
    }
    for (const key in rest) {
      const value = rest[key];
      if (
        Object.prototype.hasOwnProperty.call(rest, key) &&
        columns.includes(key) &&
        value
      ) {
        queryBuilder.andWhere({ [key]: value });
      }
    }
    return queryBuilder;
  }
}
