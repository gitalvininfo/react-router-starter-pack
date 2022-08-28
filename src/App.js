import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom';
import './App.css';
import { BookRoutes } from './BookRoutes';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "books/*",
  //     element: <BookRoutes />
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ])

  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/books">Books</NavLink></li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
