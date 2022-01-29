import Task from '../interfaces/Task.interface';
import TaskCard from './TaskCard';


interface Props {
  tasks: Task[];
}


export default function TaskList({tasks}:Props) {
    return (
      <>
        {tasks.map( task => (
          <div className="col-md-4">
            <TaskCard task={task} />
          </div>
        ))}
      </>
    );
}
