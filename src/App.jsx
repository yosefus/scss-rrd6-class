import React, { useState } from 'react';
import { CiDark, CiLight } from "react-icons/ci";
import styles from './app.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'category',
        children: [
          { element: <Home />, index: true },
          { path: ':category', element: <Home /> }
        ]
      },
      { path: 'contact', element: <Contact /> }
    ]
  },
])

function App() {
  const [isLight, setIsLight] = useState(false)
  const style = isLight ? { '--bg-color': '#fff', '--color': '#000' } : {}

  return (
    <div className={styles.app} style={style}>
      <RouterProvider router={router} />
      <button onClick={() => setIsLight(old => !old)}>
        {isLight ? <CiDark /> : <CiLight />}
      </button>
      <div className="loader"></div>
    </div>
  )
}

export default App