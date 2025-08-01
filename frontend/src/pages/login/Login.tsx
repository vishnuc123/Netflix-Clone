import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { auth } from '../../config/firebase';

const Login = () => {
  const Auth = useAuth()
  const navigate = useNavigate()


  useEffect(() => {
    if (Auth?.isLogged) {
      navigate('/', { replace: true }) // replace login in browser history
    }
  }, [Auth?.isLogged, navigate])
  const [signupState, setSignUpState] = useState<string>('Sign in')
  const [firstName, setFirstName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const handleFormData = async (e: React.FormEvent) => {
    e.preventDefault()
    const nameRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]+)*$/;

    if (!email) {
      console.log('email is required')
      return
    }
    if (!pass || pass.length > 12 || pass.length < 8) {
      console.log("password is not matching the requirement")
    }

    if (signupState === "Sign up") {
      if (!firstName.match(nameRegex)) {
        console.log("Valid first name is required");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;

        // Optional: set display name
        await updateProfile(user, {
          displayName: firstName,
        });

        console.log("User signed up:", setSignUpState('Sign in'));
      } catch (error) {
        console.error("Signup error:", error);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;

        console.log("User signed in:", navigate('/'));
      } catch (error) {
        console.error("Signin error:", error);
      }
    }

  }

  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        alt="Netflix Background"
      />

      <div className="absolute w-full h-full bg-black/60 z-10" />
      <div className="absolute z-20 w-full px-8 py-5 flex justify-between items-center">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>

      </div>

      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-md h-[600px] mx-auto bg-black/75 text-white px-10 py-10 rounded">
          <h1 className="text-3xl font-bold mb-6">{signupState}</h1>

          <form className="w-full flex flex-col space-y-4" onSubmit={handleFormData}>
            {signupState === "Sign up" ? (<input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value)
              }}
              placeholder="First Name"
              className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />) : <></>}

            <input
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value)
              }}
              placeholder="Email or phone number"
              className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPass(e.target.value)
              }}
              type="password"
              placeholder="Password"
              className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded p-3 font-semibold"
            >
              {signupState}
            </button>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="accent-red-600" />
                <span>Remember me</span>
              </label>
              <span className="hover:underline cursor-pointer">Need help?</span>
            </div>
          </form>

          <div className="mt-6 text-sm text-gray-400">
            New to Netflix?{' '}
            {signupState === 'Sign in' ? (<button onClick={() => setSignUpState('Sign up')} className="text-white hover:underline">
              Sign Up now
            </button>) : (<button onClick={() => setSignUpState('Sign in')} className="text-white hover:underline">
              Sign In now
            </button>)}

          </div>

          <p className="mt-4 text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="text-blue-500 hover:underline cursor-pointer"> Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
