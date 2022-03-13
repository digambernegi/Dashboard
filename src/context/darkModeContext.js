import { createContext } from "react"

const INITIAL_STATE={
    dark:false
}

export const DarkModeContext=createContext(INITIAL_STATE)

export const DarkModeProvider=({children}) =>{

}