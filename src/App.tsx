import {useState} from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './interfaces/Task.interface';
import logo from './logo.svg';

interface Props {
  title?: string;
}


export function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "Learn React",
    description: "Learn React with videos",
    completed: false
  }]);

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="react-logo" style={{width: '4rem'}} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <TaskList tasks={tasks} />
      </main>

    </div>
  );
}