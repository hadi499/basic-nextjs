import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductList = () => {
  const { data, error } = useSWR("http://localhost:5000/products", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading....</div>;
  return (
    <div>
      {data.map((item) => (
        <ul>
          <li>
            {item.name} - {item.price}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
