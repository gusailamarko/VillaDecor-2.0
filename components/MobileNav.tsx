//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import {Link} from "react-router";
import {navItems} from "../app/constants/stuff"

const MobileNav = () => {
    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle();
    }

  return (
    <div className="mobile-sidebar sm:block md:hidden wrapper bg-white">
        <header className="flex justify-between items-center p-4">
            <Link to="/">
                <img src="/images/villa_gif.gif" alt="Logo" className="size-[40px]"/>
            </Link>
            <button onClick={toggleSidebar}>
                <img src="/icons/menu.svg" alt="Menu" className="size-7"/>
            </button>
        </header>

        <SidebarComponent width={270} ref={(Sidebar) => sidebar = Sidebar} created={() => sidebar.hide()} closeOnDocumentClick={true} showBackdrop={true} type="over">
          <div className="flex flex-col h-full gap-3 items-center">
            {navItems.map((item, index) => (
              <div className="mt-2 w-11/12 h-1/3 flex flex-col justify-evenly items-center border-2 border-black bg-gray-200" key={index}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="black" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                    </svg>
                </div>
                <div>
                  <a key={index} href={item.href}>
                    <p className="text-black text-[36px]" key={index}>{item.name}</p>
                  </a>
                </div>               
            </div>
            ))}
          </div>
        </SidebarComponent>
    </div>
  )
}

export default MobileNav