import { useState } from "react";

const UserState = () => {
  const [t, setT] = useState("password");
  return (
    <div>
      <input type={t} />
      <button
        onClick={() => {
          setT(t === "password" ? "text" : "password");
        }}
      >
        eye
      </button>
    </div>
  );
};

export default UserState;
