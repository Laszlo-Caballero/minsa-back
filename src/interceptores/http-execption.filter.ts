import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus(); // 404 500 2003 etc
    const errors = exception.getResponse() as { message: string | string[] };

    response.status(status).json({
      data: null,
      message: exception.message,
      status,
      errors: errors.message,
    });
  }
}
