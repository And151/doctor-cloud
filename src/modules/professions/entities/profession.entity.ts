import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "professions"
})
export class Profession {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profession, profession => profession.id)
  @JoinColumn({name: 'parent_category_id'})
  parentCategoryId: number

  @Column()
  category: string;

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
