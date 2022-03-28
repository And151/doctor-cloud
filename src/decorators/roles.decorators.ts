import { SetMetadata } from "@nestjs/common";
import { IUserRoles } from "../modules/user/models/user.models";
import { ROLES_METADATA_KEY } from "../constants";

export const Roles = (...roles: IUserRoles[]) => SetMetadata(ROLES_METADATA_KEY, roles);
