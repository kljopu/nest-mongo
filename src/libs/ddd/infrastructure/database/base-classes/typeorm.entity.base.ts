import { Prop } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';

// @Schema({ versionKey: false, collection: 'campers' })
export abstract class MongoSchemaBase {
  constructor(props?: unknown) {
    if (props) {
      Object.assign(this, props);
    }
  }

  @Prop()
  _id: ObjectID;

  @Prop({ type: Date, required: true })
  createdAt: Date;

  @Prop({ type: Date, required: true })
  updatedAt: Date;
}
