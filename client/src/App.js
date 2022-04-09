import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/shared/Footer';
import Home from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Goals from './components/goals/Goals';
import GoalForm from './components/goals/GoalForm';
const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/' element={ <ProtectedRoute />}>
            {/* Your Protected routes go here */}
            <Route path='/goals' element={<Goals />} />
            <Route path='/goals/:goalId/edit' element={ <GoalForm /> } />
          </Route>
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='*' element={ <Nomatch /> } />
        </Routes>
      </>
    </FetchUser>
    <Footer />
  </>
)

export default App;
