import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';

export class ResponseFormat<T> {
  @ApiProperty()
  duration: string;
  @ApiProperty()
  message: string;

  data: T;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ResponseFormat<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseFormat<T>> {
    const now = Date.now();

    return next.handle().pipe(
      map((data) => ({
        message: data.message,
        duration: `${Date.now() - now}ms`,
        data: data.object,
      })),
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const duration = Date.now() - now;
        response.set('X-Response-Time', `${duration}ms`);
      }),
    );
  }
}
