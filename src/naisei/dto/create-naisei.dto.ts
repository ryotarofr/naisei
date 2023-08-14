// import { EvaluationType } from "@prisma/client"
import { IsEnum, IsString } from "class-validator"

export class CreateNaiseiDto {
  @IsString()
  naisei: string

  // @IsEnum(EvaluationType)
  // evaluation_type: EvaluationType
}
