import React from 'react'
import Styles from "./styles/tags.module.scss"
import Pictures from "../gallery/pictures.json"

function Tags({tags,filterPictures,setItens}) {
  return (
    <div className={Styles.tags}>
        <p>Provinces and Territories:</p>
        <ul className={Styles.tags__list}>
          <li onClick={()=>setItens(Pictures)}>All</li>
          {tags.map((tag) => {
            return <li key={tag} onClick={()=>filterPictures(tag)}>{tag}</li>
          })}
        </ul>
    </div>
  )
}
export default Tags