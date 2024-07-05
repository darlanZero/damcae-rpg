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

              <div className='card-actions justify-center lg:justify-start gap-4 p-4'>
                <div className='tooltip tooltip-open tooltip-bottom lg:tooltip-right z-0  gap-2' data-tip={content.observation}>
                  <button className='text-richBlack-1 btn-success btn btn-outline'>
                    <Redo2Icon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      <div className='card-body flex items-center text-center'>

        {content.powerUpLevels && (
          <div className='flex flex-col gap-2 p-2 text-justify'>
            <h3 className='card-title font-title text-2xl md:text-4xl'>
              Poderes
            </h3>
            
            {content.powerUpLevels.map((power, i) => (
              <p key={i}>
                <strong>Nível:</strong> {power.Level}<br />
                <strong>Descrição:</strong> {power.Description}
              </p>
            ))}
          </div>
        )}

        {content.powerUpLevels && content.bonus && (
          <div className='divider'></div>
        )}

        {content.bonus && (
          <>
            <h3 className='card-title capitalize font-title text-2xl md:text-4xl'>
              bonus
            </h3>

            <ul className='timeline timeline-vertical lg:timeline-horizontal'>
              {content.bonus.map((item, i) => (
                <li key={i}>
                  <div className={`timeline-box ${i % 2 === 0 ? 'timeline-start' : 'timeline-end'}`}>
                    <p>{item}</p>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default CardRaces