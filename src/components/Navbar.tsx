
import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"

const Navbar = () => {

    const [user, setUser] = useState<User | null>(null)
    const [profileImage, setProfileImage] = useState<string>('')
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setProfileImage(currentUser.photoURL ?? '')
            } else {
                setUser(null)
                setProfileImage('')
            }
        })

        return () => unsubscribe()
    },[])

    const generateInitialsAvatar = (name: string | null) => {
        const initials = name!.split(' ').map((n) => n[0]).join('')
        const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#3498DB', '#1ABC9C', '#00B894', '#FFC300', '#E67E22', '#F1C40F']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        return {initials, color: randomColor}
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            console.error('Erro ao fazer logout:', error)
        })
    }

  return (
    <div className='navbar root-bg bg-opacity-15 fixed z-[1] outline outline-1 outline-slate-800'>
        <div className='navbar-start mr-10'>
            <a className="btn btn-ghost normal-case text-xl">DAMCAE</a>
        </div>

        
        <div className="navbar-end flex max-w-fit gap-2">
            <a className="btn btn-outline mr-2">Mudar Tema</a>

            {user ? (
                profileImage ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={profileImage} alt="Profile Image" />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-box  w-52"
                        >
                            <li>
                                <a href="/profile" className="justify-between">
                                    Perfil
                                    <span className="badge badge-ghost gap-2 p-2">Personagens</span>
                                </a>
                            </li>
                            <li>
                                <a role="button" className="btn btn-outline btn-error mt-4 gap-2 p-2" onClick={handleLogout}>
                                    Sair
                                </a>
                            </li>
                        </ul>
                    </div>
                ): (
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <div className="avatar placeholder">
                                    <div className={`bg-[${generateInitialsAvatar(user.displayName).color}] text-neutral-content rounded-full w-10`}>
                                        <span className="text-xl">{generateInitialsAvatar(user.displayName).initials}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a href="/profile" className="justify-between">
                                    Perfil
                                    <span className="badge badge-ghost">Personagens</span>
                                </a>
                            </li>
                            <li>
                                <a role="button" className="btn btn-outline btn-error gap-2 p-2"  onClick={handleLogout}>
                                    Sair
                                </a>
                            </li>
                        </ul>
                    </div>
                )
            ): (

                <a className="btn btn-outline"
                    onClick={() => navigate("/login")}
                >
                    Login
                </a>
            )}
        </div>
    </div>
  )
}

export default Navbar