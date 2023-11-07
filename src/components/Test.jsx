/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import { createContext, useContext } from "react"



const test = () => {
    // eslint-disable-next-line no-unused-vars
    const Name =createContext()
  return (
    <Name.Provider value={"Pranjal"}>
        hello
    </Name.Provider>
  )
}

export default test
