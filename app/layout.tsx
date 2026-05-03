import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikTok Trending Hashtag Predictor",
  description: "Predict which hashtags will trend on TikTok 24-48 hours early. Analyze momentum, engagement velocity, and creator adoption."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2294ef7a-24a5-450c-af8a-72fdf8823920"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
