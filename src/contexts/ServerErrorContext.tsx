import React, {
  ReactNode,
  useContext,
  useState,
} from "react"

const ServerErrorContext = React.createContext([])

type ServerErrorProviderProps = {
  children: ReactNode
}

export function useServerErrorContext() {
  return useContext(ServerErrorContext) as any
}

export function ServerErrorProvider({ children }: ServerErrorProviderProps) {
  const [serverError, setServerError] = useState(false)

  return (
    <ServerErrorContext.Provider value={[serverError, setServerError]}>
      {children}
    </ServerErrorContext.Provider>
  )
}
