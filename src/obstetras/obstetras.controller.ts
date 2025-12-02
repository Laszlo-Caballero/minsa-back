import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ObstetrasService } from './obstetras.service';
import { CreateObstetraDto } from './dto/create-obstetra.dto';
import { UpdateObstetraDto } from './dto/update-obstetra.dto';
import { Obstetra } from './entities/obstetra.entity';
import { QueryDto } from 'src/pacientes/dto/query.dto';

@Controller('obstetras')
export class ObstetrasController {
  constructor(private readonly obstetrasService: ObstetrasService) {}

  @Get()
  getObstetras(@Query() query: QueryDto): Promise<Obstetra[]> {
    return this.obstetrasService.getObstetras(query);
  }
  @Get(':id')
  getObstetra(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return this.obstetrasService.getObstetra(id);
  }
  @Post()
  create(@Body() newObstetra: CreateObstetraDto) {
    return this.obstetrasService.createObstetra(newObstetra);
  }
  @Delete(':id')
  deleteObstetra(@Param('id', ParseIntPipe) id: number) {
    return this.obstetrasService.deleteObstetra(id);
  }
  @Patch(':id')
  updateObstetra(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    obstetra: UpdateObstetraDto,
  ) {
    return this.obstetrasService.updateObstetra(id, obstetra);
  }
}
