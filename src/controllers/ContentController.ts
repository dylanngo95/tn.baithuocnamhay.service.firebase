import { Controller, Tags, Route, Get, Query, Post, Body, Delete } from "tsoa";
import { inject } from "inversify";
import { ContentService } from "../services/ContentService";
import { ProvideSingleton } from "../inversify/ioc";
import { MContentView } from "../views/MContentView";
import { IPaginationModel, ContentEntity } from "../entities/index";

@Tags('Content')
@Route('content')
@ProvideSingleton(ContentController)
export class ContentController extends Controller {
  
  constructor(@inject(ContentService) protected service: ContentService) {
    super();
  }

  @Get('{id}')
  public async getById(id: string): Promise<MContentView> {
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
    return this.service.getPaginated(page, limit, fields, sort, q);
  }

  @Post()
  public async addContent(@Body() content: MContentView): Promise<MContentView> {
    return this.service.save(<ContentEntity>content);
  }

  @Delete('{id}')
  public async delete(id: string): Promise<void> {
    return this.service.delete(id);
  }

}