import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Context = createParamDecorator((ctx: ExecutionContext) => {
  const handlerName = ctx.getHandler().name;
  return handlerName;
});
