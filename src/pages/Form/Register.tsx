
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HandleRegister } from '../../Auth/Auth'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await HandleRegister(email, password, bio, nome, fotoPerfil)
      navigate('/')
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login')
    }
  }

  const navigate = useNavigate()

    return (
      <>
        <div className="auth-wrapper">
          <section className="auth-section-wrapper">
            <h1 className="auth-section-title">Bem vindo Ao Damcae!</h1>
            <div className="auth-section-div">
              <p className="md:text-lg gap-4 p-4">
                Conheça um novo mundo a explorar e encare novos desafios. lute contra monstros e crie seu império!
              </p>
  
              <p>Já tem uma conta? <Link to="/login" className="hover:text-dark-theme-primary italic">Clique aqui</Link> para redirecionar para sua conta já criada!</p>
            </div>
          </section>
  
          <section className="auth-form">
            <h1 className="auth-form-title">Descreva seu perfil...</h1>

            <div className='flex flex-col'>
                <div className='gap-2 p-2 md:gap-4 md:p-4'>
                <label className="input input-bordered flex items-center gap-2">
                    Nome
                    <input 
                      type="text" 
                      placeholder="Coloque seu nome aqui..." 
                      className="w-full grow"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)} 
                    />
                </label>
                </div>
    
                <div className='form-item'>
                <label className="form-label">
                    Email
                    <input 
                      type="text" 
                      placeholder="Coloque seu E-mail aqui..." 
                      className="w-full grow" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                </div>

                <div className="form-bio-item">
                  <textarea 
                    placeholder="Bio" 
                    className="form-bio-label"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>

                <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">foto de perfil</span>
                    </div>
                    <input 
                      type="file" 
                      className="file-input file-input-bordered w-full max-w-xs" 
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files) {
                          setFotoPerfil(e.target.files[0])
                        }
                      }}
                    />
                    </label>
                </div>
    
                <div className="form-item">
                <label className="form-label">
                    Senha
                    <input 
                      type="password" 
                      placeholder="Coloque sua senha aqui..." 
                      className="w-full grow" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                </div>
            </div>
  
            <div className="form-btn-wrapper">
              <button 
                className="form-btn"
                onClick={handleSubmit}
              >
                Cadastrar
              </button>
            </div>
          </section>
        </div>
      </>
    )
}

export default Register