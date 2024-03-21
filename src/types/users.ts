export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  roles: Roles;
}

export enum Roles {
  Admin = 'admin',
  Driver = 'driver',
  Judge = 'judge',
  Racer = 'racer',
  Spectator = 'spectator',
}
