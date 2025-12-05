import { useState } from "react";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  //logic
  function logout() {}
  return {
    authenticated,
    setAuthenticated,
    logout,
  };
}
