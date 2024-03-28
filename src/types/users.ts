import { Roles } from './roles';

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  roles: Roles;
  team: string;
}
