import React from 'react'
import Home from './img/icons/home.png'
import Views from './img/icons/views.png'
import Likes from './img/icons/likes.png'
import News from './img/icons/news.png'
import Ideas from './img/icons/ideas.png'
import Styles from './styles/menu.module.scss'

function Menu() {
  return (
    <nav className={Styles.menu}>
        <ul className={Styles.menu__list}>
            <li className={Styles.menu__item}>
                <img src={Home} alt="home_icon" />
                <a href="/">Home</a>
            </li>
            <li className={Styles.menu__item}>
                <img src={Views} alt="views_icon" />
                <a href="/">Most Viewed</a>
            </li>
            <li className={Styles.menu__item}>
                <img src={Likes} alt="likes_icon" />
                <a href="/">Most Liked</a>
            </li>
            <li className={Styles.menu__item}>
                <img src={News} alt="news_icon" />
                <a href="/">News</a>
            </li>
            <li className={Styles.menu__item}>
                <img src={Ideas} alt="ideas_icon" />
                <a href="/">Ideas</a>
            </li>
        </ul>
    </nav>
  )
}
export default Menu