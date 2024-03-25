import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LanguageCodeDocument = HydratedDocument<LanguageCode>;

@Schema()
export class LanguageCode {
  @Prop()
  name: string;

  @Prop()
  id: number;
}

export const LanguageCodeSchema = SchemaFactory.createForClass(LanguageCode);