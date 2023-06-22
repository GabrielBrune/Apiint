import { Module } from '@nestjs/common';
import { PontoModules } from './pontos/pontos.controller';

@Module({
  imports: [],
  controllers: [PontoModules],
  providers: [],
})
export class AppModule {}
  