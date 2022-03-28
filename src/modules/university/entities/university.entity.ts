import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "university"
})
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  degree: string;

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
