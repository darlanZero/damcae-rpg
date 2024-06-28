
import { useState } from 'react';
import FrontPageHeaderImage from '../assets/download.jpeg'
import Modal from './Modal';

const FrontPageHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
        <div className='hero-overlay bg-opacity-60 rounded'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md mx-auto'>
            <h1 className='mb-2 text-dark-theme-primary text-2xl md:text-5xl font-bold'>
              Planeta Damcae
            </h1>
            <p className='text-white cursor-pointer hover:text-dark-theme-primary hover:underline' onClick={toggleModal}>
              "Em uma era distante, onde reis governavam suas terras de forma autoritária..."
            </p>
            <div className='flex justify-center items-center text-center'>
              {isModalOpen && (
                <Modal onClose={toggleModal}>
                  <p>Em uma era distante, onde reis governavam suas terras de forma autoritária e sempre agressiva, 
                    onde os seres eram pura energia em seus corpos físicos, pouco se assemelhando aos corpos humanos, 
                    mas com certas informações idênticas, bípedes e racionais… Até certo ponto.</p>
                </Modal>
              )}

            </div>
            <button className='btn btn-primary'>
              Inicie sua Jornada
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPageHeader