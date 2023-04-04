import React from 'react'
import Favorite from '../img/favorite.png'
import Open from '../img/open.png'


function Cards({Pictures, Styles}) {
    return (
        <ul className={Styles.gallery__cards}>
            {Pictures.map((img)=>{
                return(
                    <li key={img.id} className={Styles.gallery__card}>
                    <img className={Styles.gallery__image} src={img.path} alt="pic"/>
                    <p className={Styles.gallery__description}>{img.title}</p>
                    <div>
                        <p>{img.province}</p>
                        <span>
                        <img src={Favorite} alt="heart_like" />
                        <img src={Open} alt="open_modal" />
                        </span>
                    </div>
                    </li>
                )
            })}  
        </ul>
    )
}
export default Cards
