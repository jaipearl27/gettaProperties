import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = (props) => {
    const {testimonialData } = props;
  return (
    <div className="flex gap-7 overflow-x-scroll no-scrollbar">
      {testimonialData.map((item, index) => (
        <div key={index} className="flex sm:flex-row flex-col justify-between sm:min-w-fit min-w-full sm:h-64">
          {item.imgUrl && (
            <div className="sm:w-80 w-full  h-full">
              <img
                src={item.imgUrl}
                alt="testimonial_WrkCziYVofo"
                className=" w-full h-full object-cover rounded"
              />
            </div>
          )}
          <div className="sm:w-80 w-full overflow-hidden text-ellipsis h-full  p-5">
            <div className="flex justify-between items-center">
                <div>
                <p className=" pl-5 font-semibold">{item.name}</p>
                <p className="pl-5 text-neutral-700">{item.designation}</p>
                </div>
                <RiDoubleQuotesL className="text-5xl" />
            </div>
            <p className=" mt-5 line-clamp-6 text-balance word-spacing text-neutral-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
