import React from 'react'
import Tags from '../tags/tags'
import Styles from './styles/gallery.module.scss'
import Cards from './cards/cards'
import Pictures from './pictures.json'
import { useState } from 'react'



function Gallery() {
  const [img, setItens] =  useState(Pictures);
  const tags = [...new Set (Pictures.map((val)=> val.tag))]
  const filterPictures = (tag) => {
    const newPictures = Pictures.filter((foto) => {
      return foto.tag === tag;
    })
    setItens(newPictures);
  }
  return (
    <section className={Styles.gallery}>
        {/* <h2>Canada Gallery</h2> */}
        <Tags tags={tags} filterPictures={filterPictures} setItens={setItens}/>
        <Cards Pictures={img} Styles={Styles}/>
    </section>
  )
}
export default Gallery
