import { createContext, useContext, useRef } from 'react'

export const ShaderContext = createContext(null)

export function ShaderProvider({ children }) {
  const shaderRef = useRef(null)
  return (
    <ShaderContext.Provider value={shaderRef}>
      {children}
    </ShaderContext.Provider>
  )
}

export function useShader() {
  return useContext(ShaderContext)
}
