import logo from './img/logo.png';
import search from './img/search.png';
import Styles from './styles/header.module.scss';

function Header() {
    return (
        <header className={Styles.header}>
            <img src={logo} alt="alura_space_logo" />
            <div className={Styles.header__container}>
                <input type="text" placeholder="Search" className={Styles.header__input}/>
                <img src={search} alt="search_icon" />
            </div>
        </header>
    )
}
export default Header