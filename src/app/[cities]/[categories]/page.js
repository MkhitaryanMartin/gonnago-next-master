export async function generateMetadata({ params }) {
  const meta = {
    entertainment: "entertainment, theater, cinema, concerts, sports, arts, clubs, festivals",
    education: "education, seminars, workshops, courses, conferences",
    business: "business, forums, networking events, expos, trade shows",
    sports: "sports, football, volleyball, boxing, tennis, chess, basketball",
    tourism: "tourism, tours, destinations, landmarks, attractions",
  }
  return {
    title: `gonnago-${params.categories}`,
    keywords: meta[params.categories]
  }
}

const Categories = ({ params }) => {
  return (
    <div>
      {params.categories}
    </div>
  );
};

export default Categories;