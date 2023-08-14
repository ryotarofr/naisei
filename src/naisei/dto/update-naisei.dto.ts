import { IsString } from "class-validator";

export class UpdateNaiseiDto {
  @IsString()
  naisei: string
}