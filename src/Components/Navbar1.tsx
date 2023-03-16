// import { Link } from "react-router-dom";
// import logo from "./download.png"
// import { useSelector , useDispatch} from "react-redux";
// import {setlogInFlag} from "../redux/logInSlice"
// const Navbar1 = () => {

//   const isLoggedIn = useSelector(state=> state.signin.logInFlag)
//    const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(setlogInFlag(false));
// };


//   return (
//     <nav className="flex justify-between items-center py-4">
//       <Link to="/">
//         <img className="h-12 w-12 ml-4" src={logo} alt="Logo" />
//       </Link>
//       <div className="mr-4">
//         <Link
//           className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
//           to="/"
//         >
//           Home
//         </Link>
//         {isLoggedIn ? (
//           <>
//             <Link
//               className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
//               to="/about"
//             >
//               About
//             </Link>
//             <Link
//               className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
//               to="/contact"
//             >
//               Contact
//             </Link>
//             <button
//               className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
//               onClick={()=>handleLogout()}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
//               to="/login"
//             >
//               Login
//             </Link>
//             <Link
//               className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
//               to="/signup"
//             >
//               Sign up
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;

import { Link } from "react-router-dom";
import logo from "./download.png";
import { useSelector , useDispatch} from "react-redux";
import { setlogInFlag } from "../redux/logInSlice";
import { RootState } from "../redux/store";
interface LogIn{
  loggedIn: boolean,
  handleLogout: ()=>void;
  
};
const Navbar1: React.FC<LogIn> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setlogInFlag(false));
  };

  return (
    <nav className="flex justify-between items-center py-4">
      <Link to="/">
        <img className="h-12 w-12 ml-4" src={logo} alt="Logo" />
      </Link>
      <div className="mr-4">
        <Link
          className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
          to="/"
        >
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/about"
            >
              About
            </Link>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/contact"
            >
              Contact
            </Link>
            <button
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/signup"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar1;
