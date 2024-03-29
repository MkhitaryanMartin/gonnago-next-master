import { meta } from "@/assets/data";

export async function generateMetadata({ params }) {
  return {
    title: `gonnago-${params.categories}`,
    keywords: meta[params.categories],
    description:"description",
    openGraph: {
      title: 'Gonnago',
      description: 'Gonnago description',
      url: 'https://nextjs.org',
      siteName: 'Gonnago',
      images: [
        {
          url: 'https://nextjs.org/og.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://nextjs.org/og-alt.png',
          width: 1800,
          height: 1600,
          alt: 'alt',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
robots: "all",
author:"author"
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