import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { NaiseiController } from './naisei/naisei.controller';
import { NaiseiService } from './naisei/naisei.service';
import { NaiseiModule } from './naisei/naisei.module';


@Module({
  imports: [UserModule, PrismaModule, NaiseiModule],
  controllers: [AppController, NaiseiController],
  providers: [AppService, NaiseiService],
})
export class AppModule { }
