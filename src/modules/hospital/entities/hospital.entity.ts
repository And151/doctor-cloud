import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity({
  name: "hospital"
})
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  longitude: number;

  @Column()
  latitude: string;

  @ManyToOne(() => User, user => user.id)
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
