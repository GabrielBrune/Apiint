import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { PontoModules } from './pontos/pontos.module';
import { UsersModule } from './user/user.module';



@Module({
  imports: [PontoModules, UsersModule, AuthController],
  controllers: [],
  providers: [],
})
export class AppModule {}
  