import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Coins from './Components/Coins';
import Navbar from './Components/Navbar';
import Coin from './Components/routes/Coin';
import './index.css';

const App = () => {

  const[data,setData]=useState([]);

  const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    }).catch((err)=>{
      console.log(err.response.data)
    })
  },[])

  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Coins coins={data}/>}/>
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>} />
        </Route>
      </Routes>


    </div>
  )
}

export default App
