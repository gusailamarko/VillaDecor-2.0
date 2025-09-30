import { getSurrealismImgs } from "~/appwrite/getPaintings"
import { Footer, MobileNav, Navbar, } from "../../../components/index";
import type { Route } from "./+types/surrealism";
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-react-navigations";

export const loader = async() => {
  const surrealismImgs = await getSurrealismImgs();
  return surrealismImgs
}

const surrealism = ({loaderData}:Route.ComponentProps) => {
  const imgs = loaderData;

  return (
    <main>
      <MobileNav/>
      <Navbar/>
      <CarouselComponent id="works">
        <CarouselItemsDirective>
          {imgs.map(img => (
            <CarouselItemDirective key={img.$id} template={() => (
              <img className="m-auto w-[90%] h-[650px]" src={`/images/Paintings/Surrealism/${img.src}`}/>
            )}/>
          ))}
        </CarouselItemsDirective>
      </CarouselComponent>
      <Footer/>
    </main>
  )
}

export default surrealism