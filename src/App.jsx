import { createContext, useState } from 'react'
import './App.css'
import Home from './Home'
import Header from './Header';

export const AppCont = createContext();

function App() {
  const [count,setcount]=useState(0)
  const [color,setcolor]=useState('yellow')

 const Add=()=>{
  setcount(count+1)
 }
 
const minus=()=>{
  if (count === 0) {
    stop
  }else
    setcount(count-1)
}

const Reset=()=>{
  setcount(0)
}

const clr=(color)=>{
  setcolor(color='yellow')
  document.body.style.backgroundColor=color

}
//       const funct=()=>{
//         console.log('hyy');
//       }
     
  return (
    <>
    
      <AppCont.Provider value={{Add,minus,count,Reset,clr}}>
      {/* <AppCont.Provider value={{count}}> */}
        
        <Header/>

        <Home/>
      </AppCont.Provider>
       
        {/* <Home add={add} minus={minus} count={count} reset={Reset} clr={clr}/> */}

        {/* < Home pass='hello' call={funct()} /> */}
        
    

     
  
    </>

  )
}



export default App
