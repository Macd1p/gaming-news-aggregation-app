// app/news/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useAuth } from "@/utils/AuthContext";
import Link from "next/link";
import NewsCard from "./components/NewsCard";

export default function NewsPage() {
  const { user, loading } = useAuth();
  const [articles, setArticles] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/articles");
        const data = await res.json();
        const validArticles =
          data.articles
            ?.filter(
              (article) =>
                article.title &&
                article.description &&
                article.url &&
                article.urlToImage &&
                !article.title.includes("[Removed]") &&
                !article.description.includes("[Removed]")
            )
            .slice(0, 18) || [];

        setArticles(validArticles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setDataLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading || dataLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-800 text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-white">
          <p className="mb-4">Please log in to view the news page.</p>
          <Link href="/login">
            <button className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 pb-6 lg:grid-cols-3 gap-4 mt-8 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
