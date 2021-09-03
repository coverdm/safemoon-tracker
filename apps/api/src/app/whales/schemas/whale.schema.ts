import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type WhaleDocument = Whale & Document;

@Schema()
export class Whale {

  @Prop()
  balance_current: string;

  @Prop()
  balance_history: string;

  @Prop({unique: true})
  address: string;
}

export const WhaleSchema = SchemaFactory.createForClass(Whale)
