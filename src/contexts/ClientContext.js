import { createContext, useContext } from "react";


export const ClientContext = createContext({})

export function ClientProvider({ children }){

    return(
        <ClientContext.Provider value={{

        }}>

            {children}
        </ClientContext.Provider>
    )
}

export const useClient = () => {
    return useContext(ClientContext);
}