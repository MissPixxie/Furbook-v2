import Realm, { BSON } from "realm";
import { Dog } from "./dogSchema";
import { Event } from "./eventSchema";
import { Place } from "./placeSchema";

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  password!: string;
  country!: string;
  city!: string;
  dogs!: Array<Dog>[];
  savedPlaces!: Array<Place>[];
  savedEvents!: Array<Event>[];
  createdAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      email: "string",
      password: "string",
      country: "string",
      city: "string",
      dogs: "array",
      savedPlaces: "array",
      savedEvents: "array",
      createdAt: "date",
    },
  };
}
