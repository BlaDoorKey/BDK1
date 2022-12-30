import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className='text-4xl text-white'>No hay tareas :(</h1>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-2'>
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default TaskList;
