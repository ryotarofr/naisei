import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { NaiseiService } from './naisei.service';
import { CreateNaiseiDto } from './dto/create-naisei.dto';
import { UpdateNaiseiDto } from './dto/update-naisei.dto';

@Controller('naisei')
export class NaiseiController {
  constructor(private readonly naiseiService: NaiseiService) { }

  @Get()
  getAllNaisei() {
    return this.naiseiService.getAllNaisei()
  }
  @Get()
  getNaiseiByDate() {

  }

  @Post()
  createNaisei(
    @Body() { naisei }: CreateNaiseiDto
  ) {
    return this.naiseiService.createNaisei({ naisei })
  }


  @Patch(':id')
  updateNaisei(@Param('id') id: number, @Body() updateNaiseiDto: UpdateNaiseiDto) {
    return this.naiseiService.updateNaisei(id, updateNaiseiDto);
  }


  @Delete(':id')
  deleteNaisei(@Param('id') id: number) {
    return this.naiseiService.deleteNaisei(id);
  }
}
