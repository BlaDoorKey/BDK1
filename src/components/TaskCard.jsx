import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className='bg-[url("https://robohash.org/10")] bg-center bg-no-repeat bg-green-700 text-white p-4 rounded-md flex flex-col items-center drop-shadow-2xl'>
      <h1 className='text-2xl capitalize font-semibold border-b-2 border-yellow-400'>{task.title}</h1>
      <p className='text-lg capitalize'>{task.description}</p>
      <button
        className='hover:text-blue-300 bg-orange-700 rounded-sm py-1 px-2 mt-2 text-blue-100'
        onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
