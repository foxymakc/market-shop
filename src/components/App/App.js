import React, { useState, useEffect } from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import AppRouter from "../AppRouter/AppRouter";
import MenuMobile from "../MenuMobile/MenuMobile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavCatalog from "../NavCatalog/NavCatalog";
import Overlay from "../Overlay/Overlay";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [openNavCatalog, setOpenNavCatalog] = useState(false);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ЧекПользователя.then(data => {
    setCurrentUser({ IsAuth: true });
    // })
    // .catch((err) => {console.error(err); })
    // .finally(() => {setLoading(false)})
  }, []);

  // if (loading) {
  //     return <Spinner/>
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header setOpenNavCatalog={setOpenNavCatalog} />
        <AppRouter />
        <Footer />
        <NavCatalog
          openNavCatalog={openNavCatalog}
          setOpenNavCatalog={setOpenNavCatalog}
        />
        <MenuMobile
          openNavCatalog={openNavCatalog}
          setOpenNavCatalog={setOpenNavCatalog}
        />
        <Overlay
          overlayVivible={openNavCatalog}
          setOpenNavCatalog={setOpenNavCatalog}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
