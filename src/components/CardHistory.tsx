import React from "react"


const CardHistory: React.FC<CardHistoryInterface> = ({title, textContent, imageContent}) => {
  return (
    <div className='card bg-richBlack-1 w-full shadow-xl'>
        <div className='card-body'>
            {title && (
                <h2 className='card-title flex text-center items-center justify-center font-title'>
                    {title}
                </h2>
            )}

            {imageContent && (
                <div className="">
                    <img src={imageContent} alt={title} className="w-full h-36 md:h-80 object-fill md:object-cover  rounded border border-slate-950" />
                </div>
            )}

            <p>{textContent}</p>

        </div>
    </div>
  )
}

export default CardHistory