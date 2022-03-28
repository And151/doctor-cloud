import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../../user/models/user.models";

@Entity({
  name: "roles"
})
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER
  })
  name: string;
}
