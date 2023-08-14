import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateNaiseiDto } from './dto/update-naisei.dto';

interface CreateNaiseiParams {
  naisei: string
}

@Injectable()
export class NaiseiService {

  constructor(private readonly prismaService: PrismaService) { }

  getAllNaisei() {
    return this.prismaService.naisei.findMany()
  }

  getTaskById(id: number) {
    const found = this.prismaService.naisei.findUnique({
      where: {
        id,
      }
    })

    if (!found) {
      throw new NotFoundException(`タスクID ${id} は見つかりませんでした。`)
    }

    return found
  }

  async createNaisei({ naisei }: CreateNaiseiParams) {
    const createNaisei = await this.prismaService.naisei.create({
      data: { naisei }
    })

    return createNaisei.naisei
  }

  updateNaisei(id: number, updateNaiseiDto: UpdateNaiseiDto) {
    const updateNaisei = this.prismaService.naisei.update({
      where: { id },
      data: updateNaiseiDto,
    });

    return updateNaisei
  }


  deleteNaisei(id: number) {
    return this.prismaService.naisei.delete({ where: { id } });
  }

}
