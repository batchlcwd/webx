import React from "react";
import useAuthStore from "../store/auth";

function Profile() {
  //   const { isAuthenticated, login, logout } = useAuthStore();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  return (
    <div className="p-10">
      {isAuthenticated ? (
        <div>
          <h1 className="text-5xl tracking-tight font-bold text-green-500">
            User : {user.name}
          </h1>
          <h1 className="text-5xl tracking-tight font-bold text-green-500">
            Email : {user.email}
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="text-5xl tracking-tight font-bold text-red-500">
            To access the dasboard , Login First !
          </h1>
        </div>
      )}
    </div>
  );
}

export default Profile;
