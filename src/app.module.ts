import { Module } from '@nestjs/common';
import { PontoModules } from './pontos/pontos.module';


@Module({
  imports: [PontoModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
  