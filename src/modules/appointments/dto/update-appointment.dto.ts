import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNumber, IsOptional } from "class-validator";

export class UpdateAppointmentDto {

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  hospital: number;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  date: Date;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  is_approved: boolean;
}
