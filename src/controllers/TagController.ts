import { Controller, Route, Tags, Get, Query, Post, Body, Delete } from "tsoa";
import { ProvideSingleton, inject } from "../inversify/ioc";
import { TagService } from "../services/TagService";
import { MTagView } from "../views/MTagView";
import { IPaginationModel } from "../entities/index";
import { TagEntity } from "../entities/TagEntity";

@Tags('Tag')
@Route('tag')
@ProvideSingleton(TagController)
export class TagController extends Controller {
  
  constructor(@inject(TagService) protected service: TagService) {
    super();
  }

  @Get('{id}')
  public async getById(id: string): Promise<MTagView> {
    return this.service.getById(id);
  }

  @Get()
  public async getPaginated(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('fields') fields?: string,
    @Query('sort') sort?: string,
    @Query('q') q?: string, 
  ) : Promise<IPaginationModel> {
    return this.service.getPaginated(
      page,
      limit,
      fields,
      sort,
      q,
    );
  }

  @Post()
  public async addContent(@Body() tag: MTagView) {
    return this.service.save(<TagEntity>tag);
  }

  @Delete('{id}')
  public async delete(id: string): Promise<void> {
    return this.service.delete(id);
  }

}