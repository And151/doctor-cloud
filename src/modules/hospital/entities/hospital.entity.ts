import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsString } from "class-validator";

@Entity({
  name: "hospital"
})
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Column()
  address: string;

  @ApiProperty()
  @IsDecimal()
  @IsNotEmpty()
  @Column({
    type: "decimal"
  })
  longitude: number;

  @ApiProperty()
  @IsDecimal()
  @IsNotEmpty()
  @Column({
    type: "decimal"
  })
  latitude: number;

  @Column({
    name: "image_url"
  })
  imageUrl: string;

  @ManyToOne(() => User, user => user.id, {nullable: false})
  @JoinColumn({name: "created_by"})
  createdBy: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "updated_by"})
  updatedBy: number;

  @Column({
    type: "date",
    name: "created_at",
    default: new Date()
  })
  createdAt: Date;

  @Column({
    type: "date",
    name: "updated_at",
    default: new Date()
  })
  updatedAt: Date;
}
