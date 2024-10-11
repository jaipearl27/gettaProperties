import { FaStar } from "react-icons/fa";


const ReviewCard = (props) => {

    const { imgUrl, name, date, description } = props;
    return (
      <div className="flex gap-6 my-10 shadow pb-6">
        <img
          className="sm:h-24 w-16 h-16 sm:w-24 rounded-full object-cover"
          src={imgUrl}
          alt="face"
        />
        <div>
          <div className=" pt-4">
            <div className="flex gap-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="font-semibold mt-2 text-[17px]">{name}</p>
            <p className="mt-1">{date}</p>
  
            <p className="mt-7">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default ReviewCard;