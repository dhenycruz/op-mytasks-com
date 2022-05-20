import { z } from 'zod';

const TaskSchema = z.object ({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(5, { message: 'Name must be 5 or more characters long'}),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }).min(20, { message: 'Description must be 20 or more characters long'}),
  status: z.string(),
});

type Task = z.infer<typeof TaskSchema>;

export default Task;
export { TaskSchema };
