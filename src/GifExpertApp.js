import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //terminologia: (ol) = order list --- (li) = list item
    //const categorias = ['Dragon Ball', 'Re:Zero', 'My hero Academia'];

const [categorias, setCategorias] = useState(['Re:Zero']);
    // const handleAdd =() =>{
    //     setCategorias([...categorias, 'Anime']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategorias={setCategorias}/>
            <hr />

            <ol>
                {
                    categorias.map(categoria => 
                    <GifGrid
                    key = {categoria}
                     category = {categoria} />
                    )
                }
            </ol>

        </>
    )

  

}


