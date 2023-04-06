import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductId = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    const getProductById = async () => {
      const response = await fetch(
        `http://localhost:5000/products/${productId}`
      );
      const data = await response.json();
      setName(data.name);
      setPrice(data.price);
    };
    getProductById();
  }, [productId]);
  return (
    <div>
      <h3>
        {name} - {price}
      </h3>
    </div>
  );
};

export default ProductId;
