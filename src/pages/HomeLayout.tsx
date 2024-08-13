import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";
//to check whever is that page we are loading we use useNavigation
export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}
