import { getRealismImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import type { Route } from "./+types/realism";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";

export const loader = async() => {
  const realismImgs = await getRealismImgs();
  return realismImgs
}

const realism = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent>
        <CarouselItemsDirective>
          {imgs.map(img => (
            <CarouselItemDirective key={img.$id} template={() => (
              <img className="m-auto w-[90%] h-[650px]" src={`/public/images/Paintings/Realism/${img.src}`}/>
            )}/>
          ))}
        </CarouselItemsDirective>
      </CarouselComponent>
      <Footer/>
    </main>
  )
}

export default realism