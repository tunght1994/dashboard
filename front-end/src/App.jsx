import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components";
// import { Dashboard, PageNotFound } from "./screens";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import AddInvenory from "./components/dashboard/form/AddInventory/AddInventory";
import TransactionInventory from "./components/dashboard/Transaction/TransactionInventory";
import { useSelector } from "react-redux";
import LoadingFullScreen from './controls/Loading/index';

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <Dashboard />,
      // },
      // {
      //   path: "/",
      //   element: <AddInvenory />,
      // },
      {
        path: "/",
        element: <TransactionInventory />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <PageNotFound />,
  // },
];

function App() {
  const loading = useSelector((state) => state.loading.loading);

  return (
    <>
      {loading && <LoadingFullScreen />}
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
