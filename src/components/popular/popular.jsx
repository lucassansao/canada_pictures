import React from 'react'
import Styles from './styles/popular.module.scss'
import PicturesPopular from './pictures_popular.json'

function Popular() {
  return (
    <aside className={Styles.popular}>
        <h2>Popular</h2>
        <ul className={Styles.popular__images}>
            {PicturesPopular.map((img)=>{
              return(
                <li key={img.id}>
                  <img src={img.path} alt={img.alt} />
                </li>
              )
            })}
        </ul>
        <button>Show More</button>
    </aside>
  )
}
export default Popular
