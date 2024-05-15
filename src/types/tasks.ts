export enum Tasks {
  'detour',
  'fast',
  'road',
  'route',
}

export type TaskParams = {
  taskId: string;
  name: string;
  type: string;
  challenge?: string;
  instruction?: string;
  icon?: string;
  intro?: {
    challenge: string;
    instruction: string;
    icon: string;
  };
  detourA?: {
    title: string;
    challenge: string;
    instruction: string;
    icon: string;
  };
  detourB?: {
    title: string;
    challenge: string;
    instruction: string;
    icon: string;
  };
};
