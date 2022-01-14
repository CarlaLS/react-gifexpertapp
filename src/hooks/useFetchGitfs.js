import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs";


const useFetchGitfs = (category) => {
    
const [state, setState] = useState({
    data: [],
    loading: true,

});
useEffect (()=> {
    getGifs(category)
    .then (imgs => {
   
        setState ({
            data: imgs,
            loading: false
        })

        
    })


}, [category])



  return state
}

export default useFetchGitfs
