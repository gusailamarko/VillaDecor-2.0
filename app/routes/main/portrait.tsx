import { getPortraitImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";
import type { Route } from "./+types/portrait";

export const loader = async() => {
  const portraitImgs = await getPortraitImgs();
  return portraitImgs
}

const portrait = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent>
        <CarouselItemsDirective>
          {imgs.map(img => (
            <CarouselItemDirective key={img.$id} template={() => (
              <img className="m-auto w-[90%] h-[650px]" src={`/public/images/Paintings/Portrait/${img.src}`}/>
            )}/>
          ))}
        </CarouselItemsDirective>
      </CarouselComponent>
      <Footer/>
    </main>
  )
}

export default portrait