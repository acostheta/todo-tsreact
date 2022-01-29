import { AiOutlinePlus } from 'react-icons/ai';
import {ChangeEvent, FormEvent, useState} from 'react';
import Task from '../interfaces/Task.interface';

interface Props {
  addNewTask: (task: Task) => void;
}


type HandleInputChange = 
  ChangeEvent<HTMLInputElement
  | HTMLTextAreaElement>


export default function TaskForm({addNewTask}: Props) {

  const initialState = {
    title: '', 
    description: ''
  }

    const [task, setTask] = useState(initialState)
    
    // (e: ChangeEvent<HTMLInputElement>) Lo que hace es tipar la variable "e" con un tipo específico de funciones de React llamado ChangeEvent. A éste se le indica a qué tipo de elemento se le aplica, que para efectos de este caso es un HTMLInputElement
    const handleInputChange = ({
      target: {name, value},
    }: HandleInputChange) => setTask({...task, [name]: value});

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addNewTask(task);
      setTask(initialState);
    }


  return(
  <div className="card card-body bg-secondary text-dark">
      <h2 className="p-2">Add Task</h2>
      <form className="form p-2" onSubmit={handleNewTask} >
          <label htmlFor="label" className="form-label">Title:</label>
          <input 
            type="text"
            placeholder="Write a title"
            name="title"
            className="form-control mb-3 rounded border-0"
            onChange={handleInputChange}
            value={task.title}
            />

            <textarea 
              name="description"
              id="description" 
              rows={2} 
              placeholder='Write a description'
              className="form-control mb-3 rounded border-0"
              onChange={handleInputChange}
              value={task.description}
            ></textarea>


            <button className="btn btn-primary">
              <AiOutlinePlus />
              Save
            </button>


      </form>
  </div>
  )
}
