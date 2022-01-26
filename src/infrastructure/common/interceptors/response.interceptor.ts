import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Observable } from 'rxjs';
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
        data: data.object,
        duration: `${Date.now() - now}ms`,
      })),
    );
  }
}
