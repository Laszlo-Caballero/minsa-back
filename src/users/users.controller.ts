import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { TokenDto } from './dto/token.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('registrar')
  registrar(@Body() userDto: CreateUserDto) {
    return this.usersService.registrar(userDto);
  }

  @Post('login')
  login(@Body() userDto: CreateUserDto) {
    return this.usersService.login(userDto);
  }

  @Post('validar-captcha')
  validarCaptcha(@Body() tokenDto: TokenDto) {
    return this.usersService.validarCaptcha(tokenDto);
  }
}
