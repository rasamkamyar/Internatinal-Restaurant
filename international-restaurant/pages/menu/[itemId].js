import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";

function Details({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>loading...</h1>;
  }

  return <DetailsPage {...data} />;
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((food) => ({
    params: { itemId: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { itemId },
  } = context;
  try {
    const res = await fetch(`http://localhost:4000/data/${itemId}`);
    const data = await res.json();

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
