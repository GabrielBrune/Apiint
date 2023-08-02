import { Module } from '@nestjs/common';
import { PontoModules } from './pontos/pontos.module';
import { UsersModule } from './user/user.module';



@Module({
  imports: [PontoModules, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
  