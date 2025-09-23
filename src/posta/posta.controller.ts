import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostaService } from './posta.service';
import { CreatePostaDto } from './dto/create-posta.dto';
import { UpdatePostaDto } from './dto/update-posta.dto';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';

@Controller('posta')
export class PostaController {
  constructor(private readonly postaService: PostaService) {}

  @Post()
  create(@Body() createPostaDto: CreatePostaDto) {
    return this.postaService.create(createPostaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.postaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostaDto: UpdatePostaDto) {
    return this.postaService.update(+id, updatePostaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postaService.remove(+id);
  }
}
