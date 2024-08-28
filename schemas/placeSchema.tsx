import Realm, { BSON } from "realm";
import { User } from "./userSchema";

export class Place extends Realm.Object<Place> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  location!: string;
  category!: string;
  description!: string;
  reviews!: string;

  static schema: Realm.ObjectSchema = {
    name: "Place",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      location: "string",
      category: "string",
      description: "string",
      reviews: "string",
    },
  };
}
