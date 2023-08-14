import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateNaiseiDto } from './dto/update-naisei.dto';
import { EvaluationType } from '@prisma/client';

interface CreateNaiseiParams {
  naisei: string
  evaluation_type: EvaluationType
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

  async createNaisei({ naisei, evaluation_type }: CreateNaiseiParams) {
    const createNaisei = await this.prismaService.naisei.create({
      data: { naisei, evaluation_type }
    })

    return createNaisei
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
