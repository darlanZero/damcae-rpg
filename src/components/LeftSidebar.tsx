import { BookHeartIcon, ChevronUpSquare, FolderSymlinkIcon, HomeIcon, Minus, PlusCircle, ShieldPlusIcon, SparklesIcon, SquareMenuIcon, SwordsIcon } from 'lucide-react'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LeftSidebar = () => {

    const [isExpanded, setIsExpanded] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const navigate = useNavigate()
    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const systems = [
        {
            name: "Sistema de Level Up",
            icon: < ChevronUpSquare />,
            link: "/level-up",
        },
        {
            name: "Sistema de Drop",
            icon: < SparklesIcon />,
            link: "/drop",
        },
        {
            name: "Sistema de Treinos",
            icon: < SwordsIcon />,
            link: "/trainings",
        },
        {
            name: "Sistema de Aprendizagem",
            icon: < BookHeartIcon />,
            link: "/learning",
        },
        {
            name: "Sistema de Trabalho",
            icon: < ShieldPlusIcon />,
            link: "/work",
        },
    ]

  return (
    <>
        <div className={`transition-all bg-[1151C] duration-500 ease-in-out ${isExpanded ? "w-64" : "w-16"}`}
        >
            <div className='p-4'>
                {isExpanded ? 
                    <div className="flex flex-col p-4 gap-4 justify-center items-center">
                        <button className='btn btn-ghost'
                            onClick={() => navigate("/")}
                        >
                            <HomeIcon />
                            <p>Página Inicial</p>
                        </button>

                        <button className='btn btn-ghost'
                            onClick={handleDropdownToggle}
                        >
                            <FolderSymlinkIcon />
                            <p>Sistemas</p>
                        </button>
                        {isDropdownOpen&& (
                            <div className='bg-black-2 rounded shadow-md transition-all duration-100 ease-in-out w-48'>
                                {systems.map((system, index) => (
                                    <div key={index}
                                        className='px-4 py-2 hover:bg-gray-950'
                                        onClick={() => navigate(system.link)}
                                    >
                                        {system.icon}
                                        <p>{system.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button className='btn btn-ghost'>
                            <SquareMenuIcon />
                            <p>Ficha</p>
                        </button>
                    </div>
                    : 
                    <div className="flex flex-col p-4 gap-4 justify-center items-center">
                        <button
                            onClick={() => navigate("/")}
                            className="btn btn-ghost btn-circle"
                        >
                            <HomeIcon />
                        </button>

                        <button className='btn btn-ghost transition-all ease-out open:transition-all  open:duration-75 open:ease-out duration-75 btn-circle'
                            onClick={handleDropdownToggle}
                        >
                           <FolderSymlinkIcon />
                        </button>
                        {isDropdownOpen && (
                            <div className='bg-black-2 transition-all duration-75  ease-out rounded shadow-md p-2 ml-40 mt-40 w-50 absolute flex z-[1]'>
                                {systems.map((system, index) => (
                                    <div key={index}
                                        className='px-2 rounded-sm py-2 hover:bg-gray-950'
                                        onClick={() => navigate(system.link)}
                                    >
                                        {system.icon}
                                    </div>
                                ))}
                            </div>
                        )}

                        <button className='btn btn-ghost btn-circle'>
                            <SquareMenuIcon />
                        </button>
                    </div>
                }
            </div>
        </div>
        <button
            onClick={handleToggle}
            className='fixed bottom-0 m-2 btn btn-circle btn-ghost'
        >
            {isExpanded ? <Minus />: <PlusCircle />}
        </button>
    </>
  )
}

export default LeftSidebar