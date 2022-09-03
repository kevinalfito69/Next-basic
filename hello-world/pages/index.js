import Link from 'next/link';
import { useRouter } from 'next/router';
const Home = () => {
    const router = useRouter();
    const handleCLick = () => {
        alert('Placing your order');
        router.replace('/product');
    };
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
            <button onClick={handleCLick}>Place order</button>
        </>
    );
};
export default Home;
