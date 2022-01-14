
import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GitGrid from './components/GitGrid'

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    
    // const handleAdd =() => {
    //  setCategories([...categories, 'Leal']);
    // }
   
   
    return (
        <div>
            <h2> GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />


            {/* <button onClick={handleAdd}> Agregar </button> */}
            <ol>
                {
                    categories.map (category => /* {
                        return <li key={category}>{category}</li>
                    } */
                    ( <GitGrid key={category} category={category} />

                    ))
                }
            </ol>
        </div>
    )
}

export default GitExpertApp
