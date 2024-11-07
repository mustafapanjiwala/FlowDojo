import { Star } from "lucide-react";

export default function StarRating({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating)
              ? "fill-purple-500 text-purple-500"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      <span className="ml-2 text-gray-600">{rating}</span>
    </div>
  );
}
