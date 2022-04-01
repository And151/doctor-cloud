import { UserTypes } from "../models/user.models";
import { Exclude } from "class-transformer";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../roles/entities/role.entity";

@Entity({
  name: "user"
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    type: "varchar",
    length: 320,
    unique: true
  })
  email: string;

  @Column({ select: false })
  @Exclude()
  password: string;

  @Column()
  phone: string;

  @Column({
    type: "enum",
    enum: UserTypes,
    default: UserTypes.USER
  })
  type: string;

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

  @ManyToOne(() => Role, role => role.id, {nullable: false})
  @JoinColumn({name: 'role_id'})
  role: Role;

  @Column({
    nullable: false,
    name: 'role_id'
  })
  roleId: number;
}
