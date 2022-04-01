export type IUserRoles = UserRole.USER | UserRole.SUPER_ADMIN | UserRole.ADMIN;

export enum UserRole {
  SUPER_ADMIN = 1,
  ADMIN,
  USER
}

export enum UserRoleName {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  USER = 'user'
}

export enum UserTypes {
  DOCTOR = "doctor",
  USER = "user"
}
