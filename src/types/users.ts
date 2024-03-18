export interface IUser {
  id: number;
  name: string;
  password: string;
  races: number;
  roles: Roles;
}

export enum Roles {
  'admin',
  'driver',
  'judge',
  'racer',
  'spectator',
}
