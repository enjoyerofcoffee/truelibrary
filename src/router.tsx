import JoinUs from "./pages/JoinUs";
import Library from "./pages/Library";
import SearchLibrary from "./pages/SearchLibrary";
import Videos from "./pages/Videos";

export const headerRoutes = [
  // {
  //   path: "/",
  //   title: "Home",
  //   element: Home,
  // },
  {
    path: "/library",
    title: "Library",
    element: Library,
  },
  {
    path: "/search",
    title: "Search ",
    element: SearchLibrary,
  },
  {
    path: "/videos",
    title: "Videos",
    element: Videos,
  },
  // {
  //   path: "/about",
  //   title: "About",
  //   element: <ComingSoon />,
  // },
  {
    path: "/join",
    title: "Join",
    element: JoinUs,
  },
];
