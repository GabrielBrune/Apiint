import { Module } from '@nestjs/common';
import { PontoModules } from './pontos/pontos.module';
import { UsuarioModules } from './usuarioadm/usuario.module';


@Module({
  imports: [PontoModules, UsuarioModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
  