import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EntidadeModules } from './entidade/entidade.module';
import { PontoModules } from './pontos/pontos.module';
import { UsersModule } from './user/user.module';



@Module({
  imports: [PontoModules, UsersModule, AuthModule, EntidadeModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
  