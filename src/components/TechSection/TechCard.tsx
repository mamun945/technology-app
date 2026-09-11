import type { ITech } from "../../Type";

interface TechCard{
    tech:ITech
}

const TechCard = ({tech}:TechCard) => {
   
    return (
       <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  
  {/* Top Section */}
  <div className="flex items-start justify-between">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 p-2">
      <img
        className="h-8 w-8 object-contain"
        src={tech.logo}
        alt={tech.name}
      />
    </div>

   <span
  className={`rounded-ful px-3 py-1 text-xs rounded-xl font-medium ${
    ["Popular", "Top SQL", "Essential","Robust","Modern","Containers"].includes(tech.badge)
      ? "text-blue-500 bg-blue-100"
      : ["Versatile", "Standard"].includes(tech.badge)
      ? "text-green-500 bg-green-100"
      : tech.badge === "Fast"
      ? "text-orange-500 bg-orange-100"
      : tech.badge === "Cache"
      ? "text-red-500 bg-red-100"
      :tech.badge == "Ubiquitous"
      ?"text-yellow-500 bg-yellow-100":""
  }`}
>
  {tech.badge}
</span>
  </div>

  {/* Content */}
  <div className="mt-5 flex-1">
    <h1 className="text-xl font-bold text-gray-900">
      {tech.name}
    </h1>

    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
      {tech.description}
    </p>
  </div>

  {/* Meta Information */}
  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
    
    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
      {tech.category}
    </span>

    <span className="text-xs font-medium text-gray-500">
      {tech.level}
    </span>

    <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
      ⭐ {tech.rating}
    </span>

  </div>

  {/* Button */}
  <button className="btn btn-neutral mt-4 w-full rounded-lg transition-all duration-300 group-hover:bg-blue-600">
    Add to Stack
  </button>

</div>
    );
};

export default TechCard;