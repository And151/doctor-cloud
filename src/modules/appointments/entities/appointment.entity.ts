import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hospital } from "../../hospital/entities/hospital.entity";
import { User } from "../../user/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsDecimal, IsNotEmpty } from "class-validator";

@Entity({
  name: "appointment"
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsDecimal()
  @IsNotEmpty()
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "doctor_id"})
  doctorId: number;

  @ApiProperty()
  @IsDecimal()
  @IsNotEmpty()
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "user_id"})
  userId: number;

  @ApiProperty()
  @IsDecimal()
  @IsNotEmpty()
  @ManyToOne(() => Hospital, hospital => hospital.id)
  @JoinColumn({name: "hospital_id"})
  hospitalId: number;

  @ApiProperty()
  @IsDecimal()
  @IsNotEmpty()
  @Column()
  fee: number;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  @Column({
    type: "date"
  })
  date: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  @Column({
    type: "time"
  })
  time: Date;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  @Column({
    default: false
  })
  is_approved: boolean;
}
