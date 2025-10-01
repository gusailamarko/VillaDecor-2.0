import { getPortraitImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";
import type { Route } from "./+types/portrait";
import { useEffect } from "react";
import { setMetaTag } from "~/lib/utils";

export const loader = async() => {
  const portraitImgs = await getPortraitImgs();
  return portraitImgs
}

const portrait = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  useEffect(() => {
      setMetaTag("VillaDecor | Portrait", "The official portfolio of the well-known Hungarian artist Béla 'Villa' Varga", "/images/villa_gif.gif");
    }, []);

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent id="works">
        <CarouselItemsDirective>
          {imgs.map(img => (
            <CarouselItemDirective key={img.$id} template={() => (
              <img className="m-auto w-[90%] h-[650px]" src={`/images/Paintings/Portrait/${img.src}`}/>
            )}/>
          ))}
        </CarouselItemsDirective>
      </CarouselComponent>
      <Footer/>
    </main>
  )
}

export default portrait