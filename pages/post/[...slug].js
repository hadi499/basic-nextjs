import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug = [] } = router.query;
  return (
    // url testing http://localhost:3000/post/1/2/3
    <h3>
      slug {slug[0]} - {slug[1]} - {slug[2]}
    </h3>
  );
};

export default Slug;
