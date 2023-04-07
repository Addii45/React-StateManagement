import React, {useContext} from 'react'
import {MovieContext} from './MovieProvider'

export default function Nav({}){
    const [movies] = useContext(MovieContext)
    return(
        <span>
            <h3 style={{float:"left"}}>Adithya</h3>
            <p style={{float:"right"}}>List of Movies: {movies.length}</p>
        </span>
    )  
}