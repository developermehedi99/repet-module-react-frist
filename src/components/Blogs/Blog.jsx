import { FaReadme } from "react-icons/fa";

const Blog = ({ handleBookmarks,handleTime, blog }) => {
    const { id, cover, title, author, author_img, posted_date, reading_time } = blog;

    return (
        <div className="my-8">
            <img className="w-full mb-3" src={cover} alt="" />
            <div className="flex items-center justify-between ">
                <div className="flex items-center">
                    <img className="w-[60px] h-[60px] mr-6 rounded-full" src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <h2>{posted_date}</h2>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span >{reading_time}</span>
                    <button onClick={()=> handleBookmarks(blog)} ><FaReadme></FaReadme></button>
                </div>
            </div>
            <h1 className="text-[40px] font-bold">{title}</h1>
            {/* <p>{
                    hastags.map(hastag => <span><a href="">#{hastag}</a></span>)
                }
            </p> */}
            <button onClick={()=>handleTime(reading_time, id)}>marks as read</button>
        </div>
    );
};

export default Blog;