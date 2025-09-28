const ArtTypeCard = ({text, href, title, img}:ArtTypeCardProps) => {
  return (
    <article className="mt-5 border-2 border-black p-3 flex flex-col justify-between">
      <div>
        <img className="w-100 h-100 mb-2" src={img} alt="Image of the artstyle" />
      </div>
      <div>
        <h2 className="font-bold capitalize uppercase">{title}</h2>
        <p className="max-w-100">{text}</p>
      </div>
      <div className="">
        <button className="bg-blue-500 text-white rounded px-3 py-1 block m-auto mt-5 place-self-end border-2 border-black hover:bg-blue-700">
          <a href={href}>CHECK IT OUT</a>
        </button>
      </div>
    </article>
  )
}

export default ArtTypeCard