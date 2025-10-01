import { getAbstractImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import type { Route } from "./+types/abstract";
import { useEffect } from "react";
import { setMetaTag } from "~/lib/utils";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";

export const loader = async() => {
  const abstractImgs = await getAbstractImgs();
  return abstractImgs
}

const abstract = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  useEffect(() => {
      setMetaTag("VillaDecor | Abstract", "The official portfolio of the well-known Hungarian artist Béla 'Villa' Varga", "/images/villa_gif.gif");
    }, []);

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent id="works">
        <CarouselItemsDirective>
          {imgs.map(img => (
            <CarouselItemDirective key={img.$id} template={() => (
              <img className="m-auto w-[90%] h-[650px]" src={`/images/Paintings/Abstract/${img.src}`}/>
            )}/>
          ))}
        </CarouselItemsDirective>
      </CarouselComponent>
      <Footer/>
    </main>
  )
}

export default abstract