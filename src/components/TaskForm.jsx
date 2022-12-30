import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='max-w-lg mx-auto'>
      <form
        onSubmit={handleSubmit}
        className='bg-slate-800 p-10 mb-4 grid gap-3'>
        <h1 className='text-2xl font-bold text-white mb-3'>Crea tarea</h1>
        <input
          type='text'
          placeholder='Escribe la tarea'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className='resize-none'
          placeholder='Escribe tu descripcion'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}></textarea>
        <button className='bg-red-600 p-2 rounded-sm drop-shadow-lg'>Añadir a la lista de tareas</button>
      </form>
    </div>
  );
}

export default TaskForm;
