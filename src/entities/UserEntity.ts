import { DbEntity, DbSchema } from "./base/DbEntity";

export interface UserEntity extends DbEntity {
  name: string;
  address: string;
  age: number;
}

export const UserSchema = {
  ...DbSchema,
  name:     { type: String, required: true },
  address:  { type: String, required: true },
  age:      { type: String, required: true },
}