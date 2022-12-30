import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <main className='bg-purple-400 h-screen'>
      <div className='container mx-auto'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
