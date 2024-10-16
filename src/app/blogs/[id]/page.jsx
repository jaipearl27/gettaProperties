"use client";

import { LuDot } from "react-icons/lu";

const Data = {
  imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-detail-1.jpg",
  type: "Tips & Tricks",
  date: "April 24, 2024",
  title: "Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
};

const relatedBlogs = [
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-1.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-2.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "Homebuyers Will Be So Thankful To Hear These",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-3.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "That’s Life! Frank Sinatra’s Former Los Angeles-Area",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
  {
    imgUrl: "https://justhomnextjs.vercel.app/images/blog/blog-list-4.jpg",
    type: "Tips & Tricks",
    date: "April 24, 2024",
    title: "Affordability crisis buyers and renters turn to tiny living",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.",
  },
];

const page = () => {
  return (
    <div className="pt-32 min-h-screen p-5">
      <img
        src={Data.imgUrl}
        alt="img"
        className="w-full object-cover rounded-xl"
      />

      <div className="w-full lg:px-20 xl:px-72  px-3 py-10">
        <h1 className="text-4xl font-bold leading-10">{Data.title}</h1>

        <div className="text-neutral-500  flex items-center my-3 gap-1">
          <p>{Data.type}</p> <LuDot />
          <p>{Data.date}</p>
        </div>

        <p className="text-justify mt-10">{Data.description}</p>
      </div>

      <div className="w-full px-3 py-24">
        <h1 className="text-4xl font-bold text-center">Related Posts</h1>
        <p className="text-center mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 xl: px-7">

          {relatedBlogs.map((relatedBlog, index) => (
            <SimilarBlogCard
              key={index}
              relatedBlog={relatedBlog}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default page;


const SimilarBlogCard = (props) => {
    const { relatedBlog } = props
    return (
        <div className="w-full h-full flex flex-col">
            <div className=" flex max-h-72 lg:max-h-56 justify-center items-center overflow-hidden">
              <img
                src={relatedBlog.imgUrl}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="w-full h-auto p-1 flex flex-col items-center">
              <div className="text-neutral-500 justify-center  self-start flex items-center my-2 gap-1">
                <p>{relatedBlog.type}</p> <LuDot />
                <p>{relatedBlog.date}</p>
              </div>

              <h3 className="text-[12px] text-center font-base text-1xl text-neutral-500">
                {relatedBlog.title}
              </h3>

              <button className="mx-auto my-5 w-fit">Read More</button>
            </div>
          </div>
    )
}
