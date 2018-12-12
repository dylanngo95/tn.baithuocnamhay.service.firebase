import { DbEntity, DbSchema } from "./base/DbEntity";

export interface ContentEntity extends DbEntity {
  title: string;
  description: string;
  content: string;
  active: number;
  image: string;
  categories: string;
  userId: string;
}

export const ContentSchema = {
  ...DbSchema,
  title: { type: String, require: true, },
  description: { type: String, require: true, },
  content: { type: String, require: true, },
  active: { type: Number, require: true, },
  image: { type: String, require: true, },
  categories: { type: String, require: true, },
  userId: { type: String, require: true, },
};