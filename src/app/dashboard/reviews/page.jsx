import PaginationComponent from "@/components/Pagination/Pagination";
import ReviewCard from "@/components/Reviews/ReviewCard";

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

const reviews = () => {
  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">Reviews</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>

      <div className=" p-10">

        {reviewData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}

      </div>
      <PaginationComponent totalPages={10} />
    </div>
  );
};

export default reviews;
