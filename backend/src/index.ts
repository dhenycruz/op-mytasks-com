import TaskController from './controllers/Task';
import Task from './interfaces/Task';
import CustomRouter from './routes/Router';
import App from './app';

const app = new App();

const taskController = new TaskController();

const taskRouter =  new CustomRouter<Task>();
taskRouter.addRoute(taskController);

app.addRouter(taskRouter.router);

app.startServer();