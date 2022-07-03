import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Context = createParamDecorator((ctx: ExecutionContext) => {
  const handlerName = ctx.getClass().name;
  return handlerName;
});
