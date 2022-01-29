import Task from '../interfaces/Task.interface';

interface Props {
  task: Task;
}

export default function TaskCard({task}: Props) {
  return <div>
    <h2>
      {task.title}
    </h2>          
  </div>;
}
