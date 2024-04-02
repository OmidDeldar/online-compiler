import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Judge0Module } from '../judge0/judge0.module';
import { MongoModule } from 'src/utility/mongo/mongo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    Judge0Module,
    MongoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
