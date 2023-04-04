import Banner from './img/banner.jpg'
import Styles from './styles/home.module.scss'
//ABSOLUTE IMPORTS: JSONCONFIG.JSON
import Header from "components/header/header";
import Menu from "components/menu/menu";
import Footer from "components/footer/footer";
import Gallery from "components/gallery/gallery";
import Popular from "components/popular/popular";

function HomePage(){
    return (
        <>
            <Header/>
            <main>
                <section className={Styles.main}>
                    <Menu/>
                    <div className={Styles.main__image}>
                        <h1>Canada's Most Amazing Photos</h1>
                        <img src={Banner} alt="banner_picture"/>
                    </div>
                </section>
                <div className={Styles.gallery}>
                    <Gallery/>
                    <Popular/>
                </div>
            </main>
            
            <Footer/>
        </>
    )
}
export default HomePage