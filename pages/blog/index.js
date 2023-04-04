import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { page, limit } = router.query;
  return (
    <div>
      <h3>
        {/* testint url = http://localhost:3000/blog?page=2&limit=5 */}
        this blog page: {page} limit: {limit}
      </h3>
    </div>
  );
};

export default index;
