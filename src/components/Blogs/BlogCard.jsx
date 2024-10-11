import { useRouter } from "next/navigation";
import { LuDot } from "react-icons/lu";

const BlogCard = (props) => {
    const { blog } = props;
  
    const router = useRouter();
  
    const handleBlogClick = (id) => {
      router.push(`/blogs/${id}`);
    };
  
    return (
      <div
      onClick={() => handleBlogClick(1)}
      className="w-full rounded-xl sm:h-[22rem] sm:flex overflow-hidden group cursor-pointer">
        <div className="sm:w-[40%] w-full h-full overflow-hidden">
          <img
            src={blog.imgUrl}
            alt="sdfsd"
            className="h-full w-full object-cover group-hover:animate-zoomInOut"
          />
        </div>
        <div className="sm:w-[60%] w-full h-[22rem] px-8 flex flex-col gap-5 justify-center">
          <div className="flex gap-1 items-center">
            <p>{blog.type}</p>
            <LuDot />
            <p>{blog.date}</p>
          </div>
          <h2 className="text-[21px] font-bold">{blog.title}</h2>
          <p className="line-clamp-3 text-neutral-600">{blog.description}</p>
          <div>Read More</div>
        </div>
      </div>
    );
  };


  export default BlogCard