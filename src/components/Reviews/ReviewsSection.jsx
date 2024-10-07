import { FaStar } from "react-icons/fa";

const ReviewsSection = () => {
    return (
      <div className="my-16">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">4 Reviews</h2>
          <button className="bg-[#1e302d] text-white px-4 py-2 rounded-xl">
            Leave a review
          </button>
        </div>
  
        <ReviewCard imgUrl="	https://justhomnextjs.vercel.app/images/author/author-5.png" />
        <ReviewCard imgUrl="https://justhomnextjs.vercel.app/images/author/author-6.png" />
      </div>
    );
  };

  export default ReviewsSection;
  
  const ReviewCard = ({ imgUrl }) => {
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
            <p className="font-semibold mt-2 text-[17px]">Jane Cooper</p>
            <p className="mt-1">April 06, 2024 at 7:55 pm</p>
  
            <p className="mt-7">
              Beautiful home, very picturesque and close to everything in jtree! A
              little warm for a hot weekend, but would love to come back during
              the cooler seasons!
            </p>
          </div>
        </div>
      </div>
    );
  };