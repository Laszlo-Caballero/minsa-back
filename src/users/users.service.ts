import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import axios from 'axios';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async registrar(userDto: CreateUserDto) {
    const hashPassword = await hash(userDto.password, 10);

    const user = this.userRepository.create({
      username: userDto.username,
      password: hashPassword,
    });

    await this.userRepository.insert(user);

    return {
      message: 'Usuario registrado exitosamente',
      data: null,
    };
  }
  async login(userDto: CreateUserDto) {
    const findUser = await this.userRepository.findOne({
      where: { username: userDto.username },
    });

    if (!findUser) {
      throw new HttpException('Error login', 400);
    }

    const isPasswordValid = await compare(userDto.password, findUser.password);

    if (!isPasswordValid) {
      throw new HttpException('Error login', 400);
    }

    return {
      message: 'Login exitoso',
      data: findUser,
    };
  }

  async validarCaptcha(tokenDto: TokenDto) {
    try {
      const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${tokenDto.token}`,
      );
      if (!res.data.success) {
        throw new HttpException('Captcha verification failed', 400);
      }

      return {
        status: 200,
        message: 'Captcha verified successfully',
        data: null,
      };
    } catch {
      throw new HttpException('Captcha verification failed', 400);
    }
  }
}
