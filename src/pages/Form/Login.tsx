import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { HandleLogin } from "../../Auth/Auth"


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await HandleLogin(email, password)
      navigate('/')
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login')
    }
  }

  return (
    <>
      <div className="auth-wrapper">
        <section className="auth-section-wrapper">
          <h1 className="auth-section-title">Bem vindo Ao Damcae!</h1>
          <div className="auth-section-div">
            <p className="md:text-lg gap-4 p-4">
              Conheça um novo mundo a explorar e encare novos desafios. lute contra monstros e crie seu império!
            </p>

            <p>Não tem uma conta ainda? <Link to="/register" className="hover:text-dark-theme-primary italic">Clique aqui</Link> para obter sua conta e armazenar seus personagens</p>
          </div>
        </section>

        <section className="auth-form">
          <h1 className="auth-form-title">Entre com suas credenciais...</h1>

          <div className="form-item">
            <label className="form-label">
                E-mail
                <input 
                  type="text" 
                  placeholder="Coloque seu E-mail aqui..." 
                  className="w-full grow" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

          <div className="form-btn-wrapper">
            <button 
              className="form-btn"
              onClick={handleSubmit}
            >
              Entrar
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login