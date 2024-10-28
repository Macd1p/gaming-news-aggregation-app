"use client";

import React from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  source?: {
    name: string;
  };
  publishedAt: string;
}

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="flex flex-col bg-slate-700 rounded-lg shadow-lg p-6">
      {article.urlToImage ? (
        <img
          src={article.urlToImage}
          alt={article.title}
          width={500}
          height={300}
          className="w-full h-60 object-cover rounded-t"
        />
      ) : (
        <div className="w-full h-60 bg-gray-500 flex items-center justify-center text-white">
          No Image Available
        </div>
      )}
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <p className="text-slate-400 mb-4">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-300 underline"
      >
        Read more
      </a>
      <p className="text-sm text-slate-500 mt-2">
        {article.source?.name} /{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default NewsCard;
