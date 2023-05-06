import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError('Something went wrong! Check your email and password and try again!');
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-full  bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6 " action="#" onSubmit={handleSignIn}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            {error && <div className="text-red-600">{error}</div>}
            <button
              type="submit"
              className="w-full text-white  bg-dark-blue hover:bg-light-blue hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?
              <Link to="/sign-up" className="font-medium text-blue-600 hover:underline p-2">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
