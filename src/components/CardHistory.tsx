import React from "react"


const CardHistory: React.FC<CardHistoryInterface> = ({title, content}) => {
  return (
    <div className='HistoryCardWrapper'>
        <div className='card-body'>
            {title && (
                <h2 className='HistoryCardTitle'>
                    {title}
                </h2>
            )}

            {content.map((item, i) => (
                <div key={i}>
                    {item.imageContent && (
                        <div className="md:flex md:text-center md:items-center md:justify-center">
                            <img src={item.imageContent} alt={item.altName} className='HistoryCardContentImage' />
                        </div>
                    )}
                    {item.textContent && (
                        <div className="HistoryCardContentTextWrapper text-indent-1">
                            <p className='first-letter:uppercase first-letter:text-2xl first-letter:text-emerald-800 first-letter:font-title'>
                                {item.textContent}
                            </p>
                        </div>
                    )}
                </div>
            ))}

        </div>
    </div>
  )
}

export default CardHistory