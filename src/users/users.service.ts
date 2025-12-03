import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import axios from 'axios';
import { TokenDto } from './dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { Obstetra } from 'src/obstetras/entities/obstetra.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
    @InjectRepository(Obstetra)
    private obstetraRepository: Repository<Obstetra>,
  ) {}
  async registrar(userDto: CreateUserDto) {
    const hashPassword = await hash(userDto.password, 10);
    const findObstetra = await this.obstetraRepository.findOneBy({
      IdObstetra: userDto.obstetraId,
    });

    if (!findObstetra) {
      throw new HttpException('Obstetra not found', 400);
    }

    const user = this.userRepository.create({
      username: userDto.username,
      password: hashPassword,
      role: userDto.role,
      obstetra: findObstetra,
    });

    await this.userRepository.insert(user);

    return null;
  }
  async login(userDto: CreateUserDto) {
    const findUser = await this.userRepository.findOne({
      where: { username: userDto.username },
      relations: { obstetra: true },
    });

    if (!findUser) {
      throw new HttpException('Error login', 400);
    }

    const isPasswordValid = await compare(userDto.password, findUser.password);

    if (!isPasswordValid) {
      throw new HttpException('Error login', 400);
    }

    const payload = {
      userId: findUser.userId,
      role: findUser.role,
    };

    const token = this.jwtService.sign(payload);

    return {
      ...findUser,
      token,
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

      return null;
    } catch {
      throw new HttpException('Captcha verification failed', 400);
    }
  }
}
