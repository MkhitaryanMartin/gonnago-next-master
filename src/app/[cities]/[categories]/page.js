import { meta } from "@/assets/data";

export async function generateMetadata({ params }) {
  return {
    title: `gonnago-${params.categories}`,
    keywords: meta[params.categories]
  }
}

const Categories = ({ params}) => {
  return (
    <div>
      {meta[params?.categories] ? params.categories : "not found"}
    </div>
  );
};

export default Categories;