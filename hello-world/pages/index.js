import Link from 'next/link';
const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <p>This is my first page</p>
            <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/product">Product</Link>
                </li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
};
export default Home;
