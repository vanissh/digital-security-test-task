import './App.scss'
import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks/hook';
import { fetchData, fetchCode } from './slices/dataSlice';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import About from './pages/about/About';
import Converter from './pages/converter/Converter';
import { getLang } from './utils/getLang'

function App() {

  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  const codeUrl = 'https://restcountries.com/v3.1/alpha/'
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchData(url))
    dispatch(fetchCode(codeUrl + getLang()))
  }, [])

  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path={'/'} element={<About />} />
          <Route path={'/converter'} element={<Converter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
