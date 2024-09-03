export default function NavBar() {
    return (
        <nav>
            <a href="/"><h1>Hello World</h1></a>
            <ul className="nav-items">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/create">Create Blog</a></li>
            </ul>
        </nav>
    )
}