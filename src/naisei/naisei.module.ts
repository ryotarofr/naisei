import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NaiseiController } from './naisei.controller';
import { NaiseiService } from './naisei.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [NaiseiController],
  providers: [NaiseiService, {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  }],
})
export class NaiseiModule { }
