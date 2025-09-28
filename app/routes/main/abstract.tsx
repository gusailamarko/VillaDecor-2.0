import { getAbstractImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import type { Route } from "./+types/abstract";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";

export const loader = async() => {
  const abstractImgs = await getAbstractImgs();
  return abstractImgs
}

const abstract = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent>
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