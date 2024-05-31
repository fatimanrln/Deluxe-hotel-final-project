import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./footer";
import Banner from "./banner";
import Header from "./header";
import InstagramPhotos from "./instagram-photos";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <div style={{ marginTop: -106 }}>
        <Banner />
        {children}
        <InstagramPhotos />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
