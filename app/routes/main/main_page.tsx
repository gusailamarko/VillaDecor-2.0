import { getAbstractImgs } from "~/appwrite/getPaintings";
import {MobileNav, Navbar, ArtistInfo, Works, ArtTypeCard, Footer} from "../../../components/index";

const mainPage = () => {
  return (
    <main>
        <MobileNav/>
        <Navbar/>
        <ArtistInfo src="/images/artist_pfp.jpg"/>
        <Works/>
        <Footer/>
    </main>
  )
}

export default mainPage