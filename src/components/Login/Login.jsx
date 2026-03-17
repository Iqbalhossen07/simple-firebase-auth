import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';

function Login() {
  const [user, setUser] = useState(null)


  const provider = new GoogleAuthProvider();



  const handleGoogleSignIn = () => {

    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
      console.log(error);
    })
  }

  const handleSignInOut = () => {
    signOut(auth).then(result => {
      setUser('')
      console.log('Sign Out Successfully');
     }).catch((error) => {
      
    })
  }


  return (
    <div className="mx-auto text-center py-20">
      <div className="flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-2xl">Login</legend>

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
      <div className="py-8">
        {user ? (
          <button
            onClick={handleSignInOut}
            className="btn bg-white text-black border-[#e5e5e5] "
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] "
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        )}
      </div>

      {user && (
        <div className="flex justify-center items-center py-10">
          <div className="card w-96 bg-base-100 shadow-2xl border border-gray-200 overflow-hidden relative group">
            {/* কার্ডের উপরের ডেকোরেশন কালার */}
            <div className="h-24 bg-linear-to-r from-blue-500 to-purple-600"></div>

            <div className="px-6 pb-6 pt-0 flex flex-col items-center">
              {/* প্রোফাইল পিকচার */}
              <div className="relative -mt-12">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-lg">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </div>
                {/* অনলাইন স্ট্যাটাস ডট */}
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              </div>

              {/* ইউজার ডিটেইলস */}
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {user.displayName}
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  {user.email || "Full-Stack Developer"}
                </p>
              </div>

              {/* কিছু স্ট্যাটাস বা ডাটা (অপশনাল) */}
              <div className="flex gap-6 mt-6 w-full border-t border-gray-100 pt-4">
                <div className="flex-1 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Projects
                  </p>
                  <p className="font-semibold text-gray-700">24</p>
                </div>
                <div className="flex-1 text-center border-x border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Followers
                  </p>
                  <p className="font-semibold text-gray-700">1.2k</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Rating
                  </p>
                  <p className="font-semibold text-gray-700">5.0</p>
                </div>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="card-actions justify-center mt-6 w-full">
                <button className="btn btn-primary btn-sm btn-wide rounded-lg hover:scale-105 transition-transform">
                  View Profile
                </button>
              </div>
            </div>

            {/* হোভার করলে ছোট একটি এনিমেশন ইফেক্ট */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 transition-all pointer-events-none rounded-2xl"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login