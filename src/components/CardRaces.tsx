import { Redo2Icon } from 'lucide-react'
import React from 'react'

const CardRaces: React.FC<CardRaceInterface> = ({header, content}) => {
  return (
    <div className='card bg-richBlack-1 w-full flex  shadow-xl'>
        {header && (
          <>
            <figure>
                <img 
                  src={header.banner} 
                  alt={header.altName}
                  className='w-full border rounded-2xl h-[600px] object-fill' 
                />
            </figure>

            <div className='card-body'>
              <h2 className='card-title flex font-title text-center justify-center items-center text-2xl md:text-4xl capitalize'>
                {header.title}
              </h2>
            </div>
          </>
        )}

        {content && (
          <div className='card-body'>
            <div className='font-text flex flex-col flex-1 gap-2 p-2 text-justify'>
              <p>
                {content.description}
              </p>

              <i className='flex text-center'>
                Nível Inicial: {content.initialLevelPower}
              </i>

              <p>
                {content.initialLevelPower}: {content.powerDescription}
              </p>

              <div className='badge badge-info gap-2'>
                <Redo2Icon />
                <p className='text-richBlack-1'>
                  {content.observation}
                </p>
              </div>
            </div>
          </div>
        )}

        {content.powerUpLevels && content.bonus && (
          <div className='card-body flex items-center text-center'>
            <h3 className='card-title font-title text-2xl md:text-4xl'>
              Poderes e seus bonus
            </h3>

            <p className='flex flex-col gap-2 p-2 text-justify'>
              {content.powerUpLevels.map((power, i) => (
                <p key={i}>
                  <strong>
                    Nível: 
                  </strong>
                  {power.Level}
                  <br />

                  <strong>
                    Descrição:
                  </strong>
                  {power.Description}
                </p>
              ))}
            </p>

            <div className='badge flex badge-info badge-outline gap-2 p-2'>
              <p>
                {content.bonus}
              </p>
                
            </div>
          </div>
        )}
    </div>
  )
}

export default CardRaces