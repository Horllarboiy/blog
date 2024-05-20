import React, { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import useLocalStorage from "use-local-storage";

const Layout = ({ children }) => {
   const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage(false);
  
  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleDarkmode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        minHeight: `100vh`,
        background: darkMode ? `#0F0F0F` : `#fff`,
        color: darkMode ? `#fff` : `#0C0C0C`,
      }}
      className="md:px-20 py-2 xs:px-3"
    >
      <div style={{ flexGrow: `1` }}>
        <Nav
          handleChecked={handleChecked}
          checked={checked}
          handleDarkmode={handleDarkmode}
          darkMode={darkMode}
        />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
