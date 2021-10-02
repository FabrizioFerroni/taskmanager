import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import {ToastContainer} from 'react-toastify'
// import './components/fontawesomeicons';




function App() {
  return (
    <div>
      <Router>
          <AuthProvider>
            <Layout>
              <AppRouter />
            </Layout>
          </AuthProvider>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
