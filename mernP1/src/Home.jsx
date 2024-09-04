import BlogCard from "./BlogCard";
import NavBar from "./NavBar";

function Home() {
    return (
        <>
            <NavBar />
            <div className="blog-container">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>
    )
}

export default Home;