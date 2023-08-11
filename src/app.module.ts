import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContributesController } from './contributes/contributes.controller';
import { ContributesService } from './contributes/contributes.service';
import { ContributesModule } from './contributes/contributes.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ContributesModule, UserModule],
  controllers: [AppController, ContributesController],
  providers: [AppService, ContributesService],
})
export class AppModule {}
