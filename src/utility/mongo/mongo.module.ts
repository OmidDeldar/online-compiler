import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageCode, LanguageCodeSchema } from './schemas/language-code.schema';
import { MongoService } from './service/mongo.service';
import { SeedingService } from './service/seed-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LanguageCode.name, schema: LanguageCodeSchema }])
  ],
  providers: [MongoService,SeedingService],
  exports: [MongoService]
})
export class MongoModule {}