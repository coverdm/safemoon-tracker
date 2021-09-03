import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatisticsDocument = Statistics & Document;

@Schema()
export class Statistics {

  @Prop({unique: true})
  id: string;

  @Prop()
  price_current: string;

  @Prop()
  price_history: string;

  @Prop()
  burn_amount: string;

  @Prop()
  reflections: string;
}

export const StatisticsSchema = SchemaFactory.createForClass(Statistics);
