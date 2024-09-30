import Realm, { BSON } from "realm";
import { User } from "./userSchema";

export class Message extends Realm.Object<Message> {
  _id!: Realm.BSON.ObjectId;
  members!: Array<User>[];
  message!: string;

  static schema: Realm.ObjectSchema = {
    name: "Message",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      members: "array",
      message: "string",
    },
  };
}
