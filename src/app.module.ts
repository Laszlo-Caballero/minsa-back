import { Module } from '@nestjs/common';
import { PostaModule } from './posta/posta.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProgramasModule } from './programas/programas.module';
import { ObstetrasModule } from './obstetras/obstetras.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { CitasModule } from './citas/citas.module';
import { AtencionModule } from './atencion/atencion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        encrypt: process.env.ENCRYPT === 'true',
        trustServerCertificate: true,
      },
      requestTimeout: 0,
    }),
    PostaModule,
    UsersModule,
    ProgramasModule,
    PacientesModule,
    ObstetrasModule,
    CitasModule,
    AtencionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
