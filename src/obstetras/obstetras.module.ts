import { Module } from '@nestjs/common';
import { ObstetrasService } from './obstetras.service';
import { ObstetrasController } from './obstetras.controller';
import { Obstetra } from './entities/obstetra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Obstetra])],
  controllers: [ObstetrasController],
  providers: [ObstetrasService],
})
export class ObstetrasModule {}
