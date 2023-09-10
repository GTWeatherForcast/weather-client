import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './components/sign-in/SignIn';
import SignUpPage from './components/sign-up/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <SignInPage/> } />
        <Route path="sign-up" element={ <SignUpPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;