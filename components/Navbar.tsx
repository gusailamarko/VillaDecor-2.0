import {navItemOptions, navItems} from "../app/constants/stuff"

const Navbar = () => {
  return (
    <nav className="hidden md:flex w-full bg-white text-black flex items-center">
      <div className="md:w-3/12 m-4">
        <img src="/public/images/villa_gif.gif" className="size-[50px]" alt="Logo" />
      </div>
      <div className="md:w-9/12 flex justify-end">
        <div className="flex justify-end gap-6 m-4">
          {navItems.map((item, index) => (
            <a key={index} href={item.href}><p key={index}>{item.name}</p></a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar