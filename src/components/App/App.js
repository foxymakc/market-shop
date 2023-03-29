import React from "react";
import "./App.css";
import AppRouter from "../AppRouter/AppRouter";
import MenuMobile from "../MenuMobile/MenuMobile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavCatalog from "../NavCatalog/NavCatalog";
import Overlay from "../Overlay/Overlay";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
    // ЧекПользователя.then(data => {
    // user.setUser(true)
    // user.setIsAuth(true)
    // })
    // .catch((err) => {console.error(err); })
    // .finally(() => {setLoading(false)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (loading) {
  //     return <Spinner/>
  // }

  return (
    <div className="app">
      <Header />
      <AppRouter />
      <Footer />
      <NavCatalog />
      <MenuMobile />
      <Overlay />
    </div>
  );
}

export default App;
