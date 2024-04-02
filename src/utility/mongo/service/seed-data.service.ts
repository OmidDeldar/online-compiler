import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  LanguageCode,
  LanguageCodeSchema,
} from '../schemas/language-code.schema'; // Replace with your schema path
import { CreateLanguageCodeDto } from '../DTOs/create-language-code.dto';

@Injectable()
export class SeedingService implements OnModuleInit {
  constructor(
    @InjectModel(LanguageCode.name)
    private readonly languageCode: Model<LanguageCode>,
  ) {}

  // Seed data only if the collection is empty
  async seedInitialData() {
    const existingData = await this.languageCode.find();

    if (existingData.length === 0) {
      const userData: CreateLanguageCodeDto[] = [
        { name: 'javascript', id: 63 },
        { name: 'java', id: 91 },
        { name: 'python', id: 71 },
        { name: 'cpp', id: 76 },
      ];
      await this.languageCode.insertMany(userData);
      console.log('Initial data seeded successfully!');
    } else {
      console.log('Database already has data, skipping seeding.');
    }
  }
  
  async onModuleInit() {
    await this.seedInitialData();
  }
}
