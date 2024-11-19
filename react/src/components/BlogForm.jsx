import Button from "./Button";

function BlogForm() {
    return (
        <div className="blog-form-container">
            <h2>Create a New Blog</h2>
            <form action="">
                <div className="input">
                    <label htmlFor="title">Title : </label>
                    <input type="text" name="" id="title" placeholder="Enter your title here" />
                </div>
                <div className="input">
                    <label htmlFor="subtitle">Subtitle : </label>
                    <input type="text" name="" id="subtitle" placeholder="Enter your subtitle here" />
                </div>
                <div className="input">
                    <label htmlFor="image">Image : </label>
                    <input type="file" name="" id="image" />
                </div>
                <div className="input">
                    <label htmlFor="description">Description : </label>
                    <textarea name="" id="description" rows="4" cols="50" placeholder="Enter the description here"></textarea>
                </div>
                <Button text="Submit"></Button>
            </form>
        </div>
    )
}

export default BlogForm;