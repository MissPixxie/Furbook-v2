import Realm, { BSON } from "realm";

export class Dog extends Realm.Object<Dog> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  age!: number;
  sex!: string;
  breed!: string;
  neutered!: boolean;
  owner!: Realm.BSON.ObjectId;
  friends!: Array<Dog>[];

  static schema: Realm.ObjectSchema = {
    name: "Dog",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      age: "number",
      sex: "string",
      breed: "string",
      neutered: { type: "bool", default: false },
      owner: "objectId",
      friends: "array",
    },
  };
}
