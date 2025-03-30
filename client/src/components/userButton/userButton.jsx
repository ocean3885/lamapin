import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";
import { Link, useNavigate } from "react-router";
import apiRequest from '../../utils/apiRequest';
import useAuthStore from '../../utils/authStore';

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  const {currentUser, removeCurrentUser} = useAuthStore()

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
    } catch(err) {
      console.log(err)
    }
  }

  return currentUser ? (
    <div className="userButton">
      <Image src={currentUser.img || "/general/noAvatar.png"} alt="" />
      <button onClick={() => setOpen((prev) => !prev)} className="arrow-button">
        <Image path="/general/arrow.svg" className="arrow" alt="Toggle" />
      </button>
      {open && (
        <div className="userOptions">
          <Link to={`/profile/${currentUser.username}`} className="userOption">
            Profile
          </Link>
          <div className="userOption">Setting</div>
          <div className="userOption" onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login / Signup
    </Link>
  );
};

export default UserButton;
