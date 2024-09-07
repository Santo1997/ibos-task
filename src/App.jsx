import {Outlet, useLoaderData} from "react-router-dom";
import "./App.css";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import {createContext, useContext} from "react";
import {AuthContext} from "./provider/AuthProvider";

export const DataContext = createContext();
export const CartContext = createContext();

function App() {
  const {user} = useContext(AuthContext);
  const data = useLoaderData();

  return (
    <>
      <DataContext.Provider value={data}>
        {user && <Header />}
        <Outlet></Outlet>
        {user && <Footer />}
      </DataContext.Provider>
    </>
  );
}

export default App;
