import './App.css'
import Header from './Header'
import ProfilePanel from './ProfilePanel'
import { StudentProvider } from './StudentContext'

function App() {

  return(

    <StudentProvider>

    <Header />
    <ProfilePanel />

    </StudentProvider>

  );

}

export default App;
