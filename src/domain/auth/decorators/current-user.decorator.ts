import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthUser } from 'src/database';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AuthUser => {
    const request = ctx.switchToHttp().getRequest();
    return request['user'];
  },
);
