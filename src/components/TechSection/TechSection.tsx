import { use } from "react";
import type { ITech } from "../../Type";
import TechCard from "./TechCard";

interface ITechsection{
    technologes:Promise<ITech[]>
}

const TechSection = ({technologes}:ITechsection) => {
    const technology = use(technologes);
    return (
        <div className="container mx-auto">
          <div>
             <div className="my-7">
            <h1 className="font-bold text-4xl mb-2">Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
           Technologies
           </span></h1>
           <p className="text-gray-400">Pick one technology per category to build your ideal stack.</p>
           </div>

           <div className="grid grid-cols-3 gap-5">
               {
                technology.map((tech,index) =><TechCard key={index} tech={tech}></TechCard>)
               }
           </div>
          </div>
          <div>

          </div>
        </div>
    );
};

export default TechSection;