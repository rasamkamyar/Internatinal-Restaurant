import DetailsPage from "@/components/templates/DetailsPage";

function Details({ data }) {
  return <DetailsPage data={data} />;
}

export default Details;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
