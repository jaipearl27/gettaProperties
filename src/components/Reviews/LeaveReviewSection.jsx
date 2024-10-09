import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const LeaveReviewSection = () => {
    return (
      <div className="my-20">
        <h2 className="text-xl font-bold ">Leave A Review</h2>
        <p className="my-6">
          Your email address will not be published. Required fields are marked *
        </p>
        <p>Your Rating*</p>
        <div className="flex gap-1">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
        </div>
        <textarea
          placeholder="Your Comment"
          rows={8}
          className="w-full p-4 border mt-7 rounded-xl mb-6 focus:outline-neutral-400"
        ></textarea>
  
        <div className="flex lg:flex-row flex-col gap-6 mb-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 border rounded-xl  focus:outline-neutral-400"
          />
  
          <input
            type="email
            "
            placeholder="Email"
            className="w-full p-4 border rounded-xl focus:outline-neutral-400"
          />
        </div>
  
        <input
          type="text"
          placeholder="Website"
          className="w-full p-4 border rounded-xl mb-6 focus:outline-neutral-400"
        />
  
        <div className="flex gap-2 items-center mb-6 justify-center lg:justify-start">
          <input type="checkbox" className="w-5 h-5" />
          <p>
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>
  
        <div className="bg-[#e7c873] text-md flex justify-center lg:mx-0  mx-auto items-center gap-3 w-fit rounded-xl px-7 py-4">
          <div>Submit Review</div>
          <GoArrowRight className="w-5 h-5" />
        </div>
      </div>
    );
  };

  export default LeaveReviewSection;