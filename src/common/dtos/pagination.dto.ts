import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enable implicit conversion
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // enable implicit conversion
  offset?: number;
}