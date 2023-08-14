import { EvaluationType } from "@prisma/client";
import { IsEnum, IsString } from "class-validator";

export class UpdateNaiseiDto {
  @IsString()
  naisei: string

  @IsEnum(EvaluationType)
  evaluation_type: EvaluationType
}