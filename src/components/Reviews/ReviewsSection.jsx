import ReviewCard from "./ReviewCard";

const reviewData = [
  {
    imgUrl: "	https://justhomnextjs.vercel.app/images/author/author-5.png",
    name: "John Doe",
    date: "Dec 12, 2022",
    description: "Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!"
  },
  {
    imgUrl: "	https://justhomnextjs.vercel.app/images/author/author-6.png",
    name: "Jane Doe",
    date: "Dec 12, 2022",
    description: "Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!"
  },
];

const ReviewsSection = () => {
    return (
      <div className="my-16">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">4 Reviews</h2>
          <button className="bg-[#1e302d] text-white px-4 py-2 rounded-xl">
            Leave a review
          </button>
        </div>

        {reviewData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    );
  };

  export default ReviewsSection;
  
