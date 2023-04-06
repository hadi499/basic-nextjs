import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data, error } = useSWR(
    `http://localhost:5000/products/${productId}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading....</div>;

  return (
    <div>
      <h3>
        {data.name} - {data.price}
      </h3>
    </div>
  );
};

export default ProductId;
