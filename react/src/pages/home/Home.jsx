
import UseState from "../../components/UseState";
import BlogCard from "../../components/BlogCard";
import NavBar from "../../components/NavBar";

function Home() {
    return (
        <>
            <NavBar />
            <div className="blog-card-container">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <UseState />
        </>
    )
}

export default Home;