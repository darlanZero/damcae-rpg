import { Outlet } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar'
import Navbar from '../../components/Navbar'


const FormLayout = () => {
  return (
    <>
        <div className="flex h-full font-title">
          <LeftSidebar/>
          <div className="flex flex-col w-full">
            <div className="w-full mb-14">
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

export default FormLayout