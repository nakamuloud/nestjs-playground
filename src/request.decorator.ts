import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Requestx = createParamDecorator((ctx: ExecutionContext) => {
  const handlerName = ctx.getHandler().name;
  return handlerName;
});
