import { Inter } from "next/font/google";
import StoreProvider from "./provider";
import Header from "@/components/header/index.js";
import Footer from "@/components/footer"
import "./globals.css";
import ThemeProvider from "@/hoc/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gonnago",
  description: "Explore a comprehensive guide to entertainment, education, business, sports, and tourism in your city on our website. Discover the latest in theater, cinema, concerts, sports events, educational opportunities, business insights, and exciting tourist destinations. Join us to stay informed about everything happening in your area",
  keywords: "Entertainment, Education, Business, Sports, Tourism"
};


async function getCategories() {
  const resCitiJson = await fetch(`https://api.gonnago.am/cities`, { cache: 'force-cache' })
  const resCiti = await resCitiJson.json()
  const resJson = await fetch(`https://api.gonnago.am/categories/menu`, { cache: 'force-cache' })
  const res = await resJson.json()
  return { categories: res.data, cities: resCiti.data }
}

export default async function RootLayout({ children}) {
  const data = await getCategories();
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header params={data} />
          <main className="main">
              {children}
            </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
