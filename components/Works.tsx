import { cardTexts } from "~/constants/stuff"
import ArtTypeCard from "../components/ArtTypeCard"

const Works = () => {
  return (
    <section id="works" className="bg-white text-black px-[20px] pt-3 pb-5 flex flex-col items-center gap-3">
      <div className="text-center mt-3">
        <h2 className="text-4xl font-bold capitalize uppercase">Check out my work</h2>
        <h3 className="text-3xl text-gray-500 capitalize uppercase">In all artforms</h3>
      </div>
      <div className="flex flex-wrap gap-6 sm:flex-col md:flex-row justify-center">
        {cardTexts.map((item, index) => (
          <ArtTypeCard key={index} text={item.text} href={item.href} img={item.img} title={item.title}/>
        ))}
      </div>
    </section>
  )
}

export default Works