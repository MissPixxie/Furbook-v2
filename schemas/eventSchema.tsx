import Realm, { BSON } from "realm";
import { User } from "./userSchema";

export class Event extends Realm.Object<Event> {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  place!: string;
  description!: string;
  typeOfEvent!: string;
  time!: Date;
  attending!: Array<User>[];
  createdAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: "Event",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
      place: "string",
      description: "string",
      typeOfEvent: "string",
      time: "date",
      attending: "array",
      createdAt: "date",
    },
  };
}
