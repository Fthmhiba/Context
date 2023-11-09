import { useContext } from "react"
import { AppCont } from "./App"

function Header() {
    const {count}=useContext(AppCont)
    return(
        <>
        <h1>Head {count}</h1>
        </>
    )
}
export default Header