import{useState,createContext,useEffect} from'react'

const ThemeContext=createContext()

 export  function ThemeProvider({children}){
    const [isDark,setIsDark]=useState(false)
    const toggleTheme=()=>{
        setIsDark(prev=>!prev)
    }
    useEffect(()=>{
        (isDark)?document.documentElement.classList.add('dark'):
        document.documentElement.classList.remove('dark')
    },[isDark])

    return(
        <ThemeContext.Provider value={{isDark,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext