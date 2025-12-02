import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs';

export interface ResponseApi<T> {
  data: T;
  message: string;
  status: number;
  errors?: string[] | string;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ResponseApi<T>>
{
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => ({
        data,
        message: 'ok',
        status: 200,
      })),
    );
  }
}
