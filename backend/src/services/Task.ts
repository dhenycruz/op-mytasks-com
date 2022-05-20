import Task, { TaskSchema } from '../interfaces/Task';
import Service, { ServiceError } from '.';
import TaskModel from '../models/Task';

class TaskService extends Service<Task> {
  constructor(model = new TaskModel()) {
    super(model);
  }

  create = async (obj: Task): Promise<Task | ServiceError | null> => {
    const parsed = TaskSchema.safeParse(obj);
    if (!parsed.success) return { error: parsed.error };

    return this.model.create(obj);
  };
}

export default TaskService;