import { DbEntity, DbSchema } from "./base/DbEntity";

export interface TagEntity extends DbEntity {
  contentId: string;
  categoryId: string;
}

export const TagShema = {
  ...DbSchema,
  contentId: { type: String, require: true, },
  categoryId: { type: String, require: true, }
}