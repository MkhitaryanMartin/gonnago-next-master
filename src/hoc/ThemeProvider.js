'use client'
 
import { createContext, useContext, Children, cloneElement} from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({
  children,
  value
}) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function GetPropsChildrens({children}){
  const data = useContext(ThemeContext)
  
  
  const childrenWithProps = Children.map(children, child => {
    return cloneElement(child, { data });
  });

  return (
    <>
      {childrenWithProps}
    </>
  )
}




