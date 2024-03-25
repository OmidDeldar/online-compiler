import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageCode, LanguageCodeSchema } from './schemas/language-code.schema';
import { MongoService } from './service/mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LanguageCode.name, schema: LanguageCodeSchema }])
  ],
  providers: [MongoService],
  exports: [MongoService]
})
export class MongoModule {}