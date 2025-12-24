import "./App.css";
import Action from "./components/Action";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  const count = useSelector((state) => state.count);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const user = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <div className="p-4 flex  flex-col items-center mt-16 justify-center gap-4">
        <h1 className="text-2xl font-semibold">Hello Counter App</h1>
        <h1 className="text-2xl font-semibold">Counter : {count}</h1>
        <Action />

        <div className="mt-3">
          {isAuthenticated ? (
            <h1 className="text-green-400">User is authenticated</h1>
          ) : (
            <h1 className="text-red-400">User is not authenticated</h1>
          )}
          {user && (
            <>
              <h1 className="text-2xl font-semifont">Hello , {user.name}</h1>
              <h1 className="text-2xl font-semifont">
                you can contact me on , {user.email}
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
