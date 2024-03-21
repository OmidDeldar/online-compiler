import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger as NestLogger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const nestLogger = new NestLogger('Main_Logger');
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  const config = new DocumentBuilder()
  .setTitle('online-compiler')
  .setDescription('online-compiler using judge0')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // await app.listen(3000);
  const port = 4600;
  await app.listen(port).then(async () => {
    nestLogger.log(`http://127.0.0.1:${port}/api`, 'Running Swagger');
  });
}
bootstrap();
