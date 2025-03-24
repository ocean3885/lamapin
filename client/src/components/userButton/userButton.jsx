import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="" />
      <button onClick={() => setOpen((prev) => !prev)} className="arrow-button">
        <Image path="/general/arrow.svg" className="arrow" alt="Toggle" />
      </button>
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Signup
    </a>
  );
};

export default UserButton;
