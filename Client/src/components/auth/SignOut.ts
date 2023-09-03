import { signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const clearLocalStorage = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('userEmail');
};
export const SignOutFunction = () => {
  const navigate = useNavigate();
  signOut(auth)
    .then(() => {
      clearLocalStorage();
      navigate('/login');
    })
    .catch(error => {
      console.log(error);
    });
};
