import Task from '../interfaces/Task.interface';

interface Props {
  task: Task;
}

export default function TaskCard({task}: Props) {
  return <div className="card card-body bg-secondary text-dark rounded" >
    <h2>{task.title}</h2>
    <p> {task.id} </p>
    <p>{task.description}</p>
    <button className="btn btn-danger">
      Delete
    </button>
  </div>;
}
