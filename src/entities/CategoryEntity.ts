import { DbEntity } from "./base/DbEntity";

export interface CategoryEntity extends DbEntity {
  index: number,
  name: string;
  description: string;
  active: number;
}

export const CategorySchema = {
  index: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  active: {
    type: Number,
    require: true,
  }
};