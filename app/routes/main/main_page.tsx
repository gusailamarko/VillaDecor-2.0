import { getAbstractImgs } from "~/appwrite/getPaintings";
import { useEffect } from "react";
import { setMetaTag } from "~/lib/utils";
import {MobileNav, Navbar, ArtistInfo, Works, ArtTypeCard, Footer} from "../../../components/index";

const mainPage = () => {
  useEffect(() => {
    setMetaTag("VillaDecor | Home", "The official portfolio of the well-known Hungarian artist Béla 'Villa' Varga", "/images/villa_gif.gif");
  }, []);

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