import Logo from "../assets/logo.png";
import { auth } from "../utils/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
      console.log(error.message);
    });
  }

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL })); 
        navigate("/browse");  
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts 
    return () => unsubscribe();
  }, []);


  return (
    <div className="flex justify-between items-center px-6 w-full bg-soft-beige">
      <Link to="/">
        <img 
          className="w-32"
          src={Logo}
          alt="logo"
        />
      </Link>
      {user && <div className="flex justify-center items-center gap-4">
        <Link to="/">
          <img className="w-14 h-14 rounded-full" src={user?.photoURL} alt="Profile" />
        </Link>
        <button
          onClick={handleSignOut} 
          className="rounded-md p-2 bg-rose-500 font-bold text-center cursor-pointer hover:text-rose-500 hover:bg-white text-white"
        >
          Sign Out
        </button>
      </div>}
    </div>
  )
} 

export default Header;