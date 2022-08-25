import { useRouter } from 'next/router';
const Review = () => {
    const router = useRouter();
    const { reviewId, productId } = router.query;
    return (
        <h1>
            Detail review page {reviewId} for product {productId}
        </h1>
    );
};

export default Review;
