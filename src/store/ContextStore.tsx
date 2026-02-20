import { createContext, useState, type PropsWithChildren } from "react";

interface IContextStore {
    IsData: boolean,
    UpdateIsData: () => void,
}

export const ContextStore = createContext<IContextStore | undefined>(undefined)

export const IsDataStoreProvider = ({children}: PropsWithChildren) => {
    const [isData, setisData] = useState<boolean>(false);

    const UpdateIsData: IContextStore = {
        IsData: isData,
        UpdateIsData: () => setisData((prev) => !prev),
    }
    
    return <ContextStore.Provider value={UpdateIsData} >
        {children}
    </ContextStore.Provider>
}
