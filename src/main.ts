import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //未知のプロパティを無視
    transform: true, //入力データを指定した型に変換
    transformOptions: {
      enableImplicitConversion: true, //暗黙的な型変換を許可
    },
  },
  ))
  await app.listen(3000);
}
bootstrap();
