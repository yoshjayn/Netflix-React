// import './App.css';
import { Provider } from 'react-redux'
import Ystore from './utils/Ystore'
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browser from './components/Browser';
function App() {

  const AppRoute= createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/browser',
          element: <Browser/>
        }
      ]
    }
  ])

  return (
    <Provider store={Ystore}>
      <RouterProvider router={AppRoute} />
    </Provider>
    
  );
}

export default App;
