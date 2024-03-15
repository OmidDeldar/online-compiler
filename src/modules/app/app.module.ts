import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Judge0Module } from '../judge0/judge0.module';

@Module({
  imports: [
    Judge0Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
