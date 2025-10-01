import { getRealismImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import type { Route } from "./+types/realism";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";
import { useEffect } from "react";
import { setMetaTag } from "~/lib/utils";

export const loader = async() => {
  const realismImgs = await getRealismImgs();
  return realismImgs
}

const realism = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  useEffect(() => {
      setMetaTag("VillaDecor | Realism", "The official portfolio of the well-known Hungarian artist Béla 'Villa' Varga", "/images/villa_gif.gif");
    }, []);

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent id="works">
        <CarouselItemsDirective>
          {imgs.map(img => (
            <CarouselItemDirective key={img.$id} template={() => (
              <img className="m-auto w-[90%] h-[650px]" src={`/images/Paintings/Realism/${img.src}`}/>
            )}/>
          ))}
        </CarouselItemsDirective>
      </CarouselComponent>
      <Footer/>
    </main>
  )
}

export default realism