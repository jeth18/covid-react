import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Sidenav from './components/sidenav/Sidenav'
import Router from './router'
import { RootState } from './state/store'

function App() {

  const tema = useSelector((state: RootState) => state.theme)

  return (
    <div className='App'>
      <Sidenav />
      <Router/>
      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme={tema ? 'light' :  'dark'}
      />
    </div>
  )
}

export default App
