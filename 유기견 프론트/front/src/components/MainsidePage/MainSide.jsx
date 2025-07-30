import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import SidebarContent from "./sidebarContent";
import loginCheck from "../../api/LoginCheck";

function MainSide() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const result = await loginCheck();
      setIsLoggedIn(result);
    };
    checkLogin();
  }, []);

  if (isLoggedIn === null) {
    return null;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarContent />
    </Sidebar>
  );
}

export default MainSide;
