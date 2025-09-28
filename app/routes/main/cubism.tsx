import { getCubismImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";
import type { Route } from "./+types/cubism";

export const loader = async() => {
  const cubismImgs = await getCubismImgs();
  return cubismImgs
}

const cubism = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent>
        <CarouselItemsDirective>
          {imgs.map(img => (
            <CarouselItemDirective key={img.$id} template={() => (
              <img className="m-auto w-[90%] h-[650px]" src={`/public/images/Paintings/Cubism/${img.src}`}/>
            )}/>
          ))}
        </CarouselItemsDirective>
      </CarouselComponent>
      <Footer/>
    </main>
  )
}

export default cubism