import React from "react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-2xl max-w-xl mx-auto bg-neutral-900/90 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-neutral-900 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-bold mb-1">{title}</p>
        <p className="text-base text-neutral-300 mb-2">{description}</p>
        <div className="flex gap-3 flex-wrap mb-2">
            {tags.map((tag) => (
            <span key={tag.id} className="text-xs bg-neutral-800 px-2 py-1 rounded text-white/80">{tag.name}</span>
            ))}
        </div>
      </div>
      {subDescription && (
        <ul className="list-disc list-outside pl-6 text-sm text-neutral-400 mt-2">
          {subDescription.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      )}
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-400 underline text-sm hover:text-blue-300 transition-colors">View Source</a>
      )}
    </div>
  );
};

export default Project;
