import { createContext , useState} from "react";

export const UserContext = createContext(null);
export const AllCoursesContext = createContext(null);

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [allCourses, setAllCourses] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser, allCourses, setAllCourses}} >
            {props.children}
        </UserContext.Provider>
    )
}
