
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css';
import Footer from './components/Footer';
import {CreateBrowserRouter, Outlet, RouterProvider, ScrollRestoration, createBrowserRouter} from 'react-router-dom';
import Cart from './pages/Cart';
import { ProductsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';
import Shops from './components/Shops';
import Elements from './components/Elements';
import Aboutus from './components/Aboutus';



const Layout = () =>{
  return (
    <div>
    <Header/>,
    <ScrollRestoration />
    <Outlet />,
    <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element: <Home />,
        loader:ProductsData,
      },
      {
        path:'/product/:id',
        element: <Product />
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/shops',
        element: <Shops />
      },
      {
        path:"/elements",
        element: <Elements />
      },
      {
        path:"/aboutus",
        element:<Aboutus />
      }
    ],
  },
])



function App() {
  return (
    <div className="App font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
