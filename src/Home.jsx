import { useContext} from "react"
import { AppCont } from "./App"

function Home() {
    const value = useContext(AppCont)
    // const {count}=useContext(AppCont)
    const {Add,minus,count,Reset,clr} = useContext(AppCont)
  

        // console.log(value,'values for ontext');
 
    return(
        <>
        {/* <h1>{count}</h1> */}
        {/* <h1>{props.pass}</h1>
        <h1>{props.call}</h1> */}
        {/*---------------------------- using props------------------------- */}
        {/* <h1 onClick={addd}> +</h1>
        <h1 > Count {props.count}</h1>
        <h1 onClick={min}>-</h1>
        <button onClick={props.reset} >Reset</button>
        <button onClick={props.clr} >Yellow</button> */}

{/* --------------------using usecontext------------------------------------------- */}

        <h1 onClick={Add}> +</h1>
        <h1 > Count {count}</h1>
        <h1 onClick={minus}>-</h1>
        <button onClick={Reset} >Reset</button>
        <button onClick={clr} >Yellow</button>

        </>
    )
}
export default Home