//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import {Link} from "react-router";
import {navItemOptions} from "../app/constants/stuff"

const MobileNav = () => {
    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle();
    }

  return (
    <div className="mobile-sidebar sm:block md:hidden wrapper bg-white">
        <header className="flex justify-between items-center p-4">
            <Link to="/">
                <img src="/public/images/villa_gif.gif" alt="Logo" className="size-[40px]"/>
            </Link>
            <button onClick={toggleSidebar}>
                <img src="/public/icons/menu.svg" alt="Menu" className="size-7"/>
            </button>
        </header>

        <SidebarComponent width={270} ref={(Sidebar) => sidebar = Sidebar} created={() => sidebar.hide()} closeOnDocumentClick={true} showBackdrop={true} type="over">
          <div className="flex flex-col gap-4 items-center">
            {navItemOptions.map((item, index) => (
              <div className="mt-2" key={index}>
                <a key={index} href="">
                  <p className="text-black text-[30px]" key={index}>{item}</p>
                </a>
            </div>
            ))}
          </div>
        </SidebarComponent>
    </div>
  )
}

export default MobileNav