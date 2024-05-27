export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleDesc = Record<UserRole, string>;
const RoleDescription: UserRoleDesc = {
  [UserRole.admin]: `${
    UserRole.admin.charAt(0).toUpperCase() + UserRole.admin.slice(1)
  } User`,
  [UserRole.editor]: `${
    UserRole.editor.charAt(0).toUpperCase() + UserRole.editor.slice(1)
  } User`,
  [UserRole.guest]: `${
    UserRole.guest.charAt(0).toUpperCase() + UserRole.guest.slice(1)
  } User`,
};
export {};
