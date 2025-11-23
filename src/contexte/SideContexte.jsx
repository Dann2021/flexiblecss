import { createContext, useContext, useState } from "react";


// creation de la valeur du contexte
const valeurContexte = createContext({data: null, setData: ()=>{}})


// creation du provider

export default function SideContexteProvider({children}){

    // variable pour mettre à jour le contexte
    const [data, setData] = useState(null)




    const valeur = {data, setData}
    return (
        <valeurContexte.Provider value={valeur}>
            {children}
        </valeurContexte.Provider>
    )
}



export const useSideContexte = () => useContext(valeurContexte)

