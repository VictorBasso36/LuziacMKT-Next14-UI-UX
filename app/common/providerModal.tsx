"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

interface OpenProviderProps {
  children: ReactNode;
}

interface OpenContextType {
    open: string;
    setOpen: (value: string) => void;
}
  
const OpenContext = createContext<OpenContextType>({
    open: '',
    setOpen: () => {},
})

export function OpenProvider({ children }: OpenProviderProps) {
    const searchParams = useSearchParams()
    const search = searchParams.get('open') || ''
  
    const [open, setOpen] = useState<string>(search)

    return (
        <OpenContext.Provider 
        value={{ open, setOpen }}
        key={open} // Adicionando a chave aqui
        >
        {children}
        </OpenContext.Provider>
    )
}


export function useOpen() {
    const context = useContext(OpenContext)
    return context 
}