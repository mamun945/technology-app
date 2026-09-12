import { use, useState } from "react";
import type { ITech } from "../../Type";
import TechCard from "./TechCard";
import SelectedCard from "./SelectedCard";
import { toast } from "react-toastify";

interface ITechsection {
  technologes: Promise<ITech[]>;
}

const TechSection = ({ technologes }: ITechsection) => {
  const technology = use(technologes);

  const [selectedCard, setSelectedCard] = useState<ITech[]>([]);

  const removeAllHandle = () => {
    toast.success("All items have been removed");
    setSelectedCard([]);
  };

  return (
    <div className="container mx-auto my-10 px-4">
      {/* Section Header */}
      <div className="my-7 text-center md:text-left">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-sm text-gray-400 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
        
        {/* Technology Cards */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technology.map((tech, index) => (
              <TechCard
                key={index}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                tech={tech}
              />
            ))}
          </div>
        </div>

        {/* Your Stack */}
        <div className="lg:sticky lg:top-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            {selectedCard.length > 0 ? (
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-4">
                  <div>
                    <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Your Stack
                    </h1>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Technologies you have selected
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 sm:text-sm">
                    {selectedCard.length} Selected
                  </span>
                </div>

                {/* Selected Cards */}
                <div className="my-5 space-y-3 sm:my-6">
                  {selectedCard.map((item: ITech, index) => (
                    <SelectedCard
                      key={index}
                      item={item}
                      selectedCard={selectedCard}
                      setSelectedCard={setSelectedCard}
                    />
                  ))}
                </div>

                {/* Remove All */}
                <button
                  onClick={removeAllHandle}
                  className="w-full rounded-lg border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  Remove All
                </button>
              </div>
            ) : (
              /* Empty State */
              <div className="flex min-h-[250px] flex-col items-center justify-center px-4 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 sm:h-16 sm:w-16">
                  <span className="text-xl sm:text-2xl">📚</span>
                </div>

                <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Your Stack is Empty
                </h1>

                <p className="mt-2 max-w-xs text-xs leading-6 text-gray-500 sm:text-sm">
                  No technologies selected yet. Start building your stack by
                  selecting the technologies you want to learn.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;