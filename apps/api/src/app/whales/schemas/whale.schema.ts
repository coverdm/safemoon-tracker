import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type WhaleDocument = Whale & Document;

@Schema()
export class Whale {

  @Prop({unique: true})
  address: string;

  @Prop()
  balance: Array<{current: string, date: string}>;
}

export const WhaleSchema = SchemaFactory.createForClass(Whale)
