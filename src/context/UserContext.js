import { createContext, useState } from "react";

export const userContext = createContext()

export const UserProvider = (props) => {
    const [userList, setUserList] = useState([])
    return (
        <userContext.Provider value={{
            userList,
            setUserList
        }}>
            {props.children}
        </userContext.Provider>
    )
}