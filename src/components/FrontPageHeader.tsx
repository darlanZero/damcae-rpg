
import FrontPageHeaderImage from '../assets/download.jpeg'

const FrontPageHeader = () => {

  return (
    <div
      className='w-full h-96 items-center flex justify-center bg-opacity-30 relative backdrop-blur-lg'
    >
      <div
        className='absolute inset-0 bg-cover bg-center backdrop-blur-lg opacity-50 filter blur-sm'
        style={{ backgroundImage: `url(${FrontPageHeaderImage})`, opacity: 0.5 }}
      ></div>
      <div
        className='hero w-3/4 h-3/4 bg-center rounded-sm blur-none relative'
        style={{ backgroundImage: `url(${FrontPageHeaderImage})` }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md mx-auto'>
            <h1 className='mb-5 text-5xl font-bold'>
              DAMCAE Project
            </h1>
            <p className='mb-5 text-white'>
              Um jogo de Whatsapp do tipo RPG semitextual criado para sua diversão e desafio.
            </p>
            <button className='btn btn-primary'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPageHeader