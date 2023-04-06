const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
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

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/products");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
  };
};
