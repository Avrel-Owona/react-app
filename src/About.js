import React, {useContext} from 'react';
import {UserContext} from "./context/userContext";

export function About() {
    const {user} = useContext(UserContext)
    return(
        <div>
            <div className={'text-4xl'}>
                About
            </div>
            {user}
        </div>
    )
}