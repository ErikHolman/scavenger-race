enum Tasks {
  'Detour' = 1,
  'Fast Forward' = 2,
  'Roadblock' = 3,
  'Route' = 4,
}
type TaskStrings = keyof typeof Tasks;

export default function getTaskType(taskNumber: TaskStrings) {
  return Tasks[taskNumber];
}
