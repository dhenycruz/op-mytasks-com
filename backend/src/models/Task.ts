import { Schema, model as createModel, Document } from 'mongoose';
import Task from '../interfaces/Task';
import MongoModel from './MongoModel';

interface TaskDocument extends Task, Document { }

const taskSchema = new Schema<TaskDocument>({
  name: String,
  description: String,
  status: String,
});

class TaskModel extends MongoModel<Task> {
  constructor(model = createModel('Tasks', taskSchema)) {
    super(model);
  }
}

export default TaskModel;
