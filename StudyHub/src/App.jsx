import './App.css'
import Header from './Header'
import ProfilePanel from './ProfilePanel'
import { StudentProvider } from './StudentContext'
import TaskManager from './TaskManager';

function App() {

  return(

    <StudentProvider>

    <Header />
    <ProfilePanel />
    <TaskManager />

    </StudentProvider>

  );

}

export default App;
