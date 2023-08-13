import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NaiseiController } from './naisei.controller';
import { NaiseiService } from './naisei.service';

@Module({
  imports: [PrismaModule],
  controllers: [NaiseiController],
  providers: [NaiseiService],
})
export class NaiseiModule { }
