import { MainRoutes } from './routes';
import { GlobalStyle } from './style';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
      <ToastContainer />
      <MainRoutes/>
    </>
  );
}

export default App;
