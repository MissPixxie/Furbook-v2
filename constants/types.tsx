export type Dog = {
  _id: string;
  name: string;
  age: number;
  sex: string;
  breed: string;
  neutered: boolean;
  images?: [];
  friends?: Array<Dog>;
  owner: string;
};

export type Event = {
  _id: string;
  title: string;
  place: string;
  time: string;
  description: string;
  typeOfEvent: string;
  date: Date;
};

export type Place = {
  _id: string;
  name: string;
  category: string;
  location: string;
  description: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  messages: Array<Message>;
  dogs: Array<Dog>;
  savedPlaces: Array<Place>;
  savedPosts?: [];
  savedEvents: Array<Event>;
  createdAt: Date;
};

export type Message = {
  _id: string;
  sender: User["name"]; // User
  receiver: User["name"]; // User
  message: string;
  createdAt: Date;
};
