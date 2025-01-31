import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import LeftSidebar from "../../components/LeftSidebar"
const RootLayout = () => {

  return (

    <>
      <div className="flex h-full w-full font-title">
        <LeftSidebar />
        <div className="flex flex-col w-full">
          <div className="mb-14">
            <Navbar />
          </div>

          <section className='flex flex-1 flex-col gap-4 p-4 min-h-screen w-full root-bg font-text'>
              <Outlet />
          </section>
        </div>
      </div>
    </>
  )
}

export default RootLayout