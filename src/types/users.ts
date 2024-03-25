export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  roles: Roles;
}

export enum Roles {
  'admin',
  'driver',
  'judge',
  'racer',
  'spectator',
}
