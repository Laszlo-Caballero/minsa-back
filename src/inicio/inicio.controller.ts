import { Controller, Get, Req } from '@nestjs/common';
import { InicioService } from './inicio.service';
import { Auth } from 'src/users/decorators/auth.decorator';
import { RequestWithUser } from 'src/users/interfaces/user.interface';

@Controller('inicio')
export class InicioController {
  constructor(private readonly inicioService: InicioService) {}

  @Auth()
  @Get()
  findAll(@Req() req: RequestWithUser) {
    return this.inicioService.findAll(req.user);
  }
}
