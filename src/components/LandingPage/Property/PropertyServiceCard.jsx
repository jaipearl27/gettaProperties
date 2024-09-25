import React from 'react'

const PropertyServiceCard = ({icon, title, description,buttonLabel}) => {
  return (
    <div className="w-full group">
            <div className="w-full flex justify-center">
              <div className="relative p-3 ">
                
                
                <div className="absolute bottom-0 left-0 rounded-full group-hover:h-[100%] group-hover:w-[100%] h-[50%] w-[50%] bg-[#e7c873] transition-all duration-300 ease-in-out"></div>
                {icon}
              </div>
            </div>

            <div className="w-full text-xl my-3 font-bold text-center">
              {title}
            </div>
            <div className="text-center px-16 text-sm text-neutral-600">
              {description}
            </div>

            <div className='mt-5 flex justify-center'>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-md">{buttonLabel}</button>
            </div>
          </div>
  )
}

export default PropertyServiceCard