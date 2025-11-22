import { getHomePage } from "@/lib/strapi";
import { HeroSection } from "@/components/HeroSection";

export async function generateMetadata() {
    const strapiData = await getHomePage()
    return {
      title: strapiData?.title,
      description: strapiData?.description,
    }
  }

export default async function Home() {
  const StrapiData = await getHomePage();
  console.log(StrapiData);

  const [heroSection] = StrapiData?.sections || [];

  return (
    <main className="containers mx-auto py-6">
      <HeroSection data={heroSection} />
    </main>
  );
}
