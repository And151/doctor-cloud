import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hospital } from "../../hospital/entities/hospital.entity";
import { User } from "../../user/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsDateString, IsDecimal, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

@Entity({
  name: "appointment"
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "doctor_id"})
  doctor: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "user_id"})
  user: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @ManyToOne(() => Hospital, hospital => hospital.id)
  @JoinColumn({name: "hospital_id"})
  hospital: number;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  @Column({
    type: "timestamp"
  })
  date: Date;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  @Column({
    default: false
  })
  is_approved: boolean;
}
