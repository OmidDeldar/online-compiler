import { Module } from '@nestjs/common';
import { Judge0Service } from './services/judge0.service';
import { Judge0Controller } from './controller/judge0.controller';
import { MongoModule } from 'src/utility/mongo/mongo.module';


@Module({
  imports: [MongoModule],
  controllers: [Judge0Controller],
  providers: [Judge0Service],
})
export class Judge0Module {}
