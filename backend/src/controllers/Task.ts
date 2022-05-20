import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import TaskService from '../services/Task';
import Task from '../interfaces/Task';

class TaskController extends Controller<Task> {
  private _route: string;

  constructor(
    service = new TaskService(),
    route = '/tasks',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Task>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const task = await this.service.create(body);
      if (!task) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in task) {
        return res.status(400).json(task);
      }

      return res.status(201).json(task);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const task = await this.service.readOne(id);
      return task
        ? res.json(task)
        : res.status(404).json({ error:  this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default TaskController;