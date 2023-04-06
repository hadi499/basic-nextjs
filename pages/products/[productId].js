const ProductId = ({ product }) => {
  return (
    <div>
      <h3>
        {product.name} - {product.price}
      </h3>
    </div>
  );
};

export default ProductId;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:5000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
};
