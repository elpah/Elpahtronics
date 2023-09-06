import { signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

export const SignOutFunction = () => {
  const navigate = useNavigate();
  signOut(auth)
    .then(() => {
      localStorage.removeItem('currentUserLocal');
      navigate('/login');
    })
    .catch(error => {
      console.log(error);
    });
};
