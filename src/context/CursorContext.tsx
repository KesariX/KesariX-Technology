import { createContext, useContext, ReactNode, useState } from 'react'

interface CursorContextType {
  isHovering: boolean
  setIsHovering: (value: boolean) => void
  targetBounds: DOMRect | null
  setTargetBounds: (bounds: DOMRect | null) => void
  mouseX: number
  mouseY: number
  setMousePos: (x: number, y: number) => void
  isClicking: boolean
  setIsClicking: (value: boolean) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isHovering, setIsHovering] = useState(false)
  const [targetBounds, setTargetBounds] = useState<DOMRect | null>(null)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [isClicking, setIsClicking] = useState(false)

  const setMousePos = (x: number, y: number) => {
    setMouseX(x)
    setMouseY(y)
  }

  return (
    <CursorContext.Provider
      value={{
        isHovering,
        setIsHovering,
        targetBounds,
        setTargetBounds,
        mouseX,
        mouseY,
        setMousePos,
        isClicking,
        setIsClicking,
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export function useCursorContext() {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursorContext must be used within CursorProvider')
  }
  return context
}
