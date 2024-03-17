import { Module } from '@nestjs/common';
import { Judge0Service } from './services/judge0.service';
import { Judge0Controller } from './controller/judge0.controller';


@Module({
  imports: [],
  controllers: [Judge0Controller],
  providers: [Judge0Service],
})
export class Judge0Module {}
