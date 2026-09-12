import type { Dispatch, SetStateAction } from "react";
import type { ITech } from "../../Type";
import { toast } from "react-toastify";

interface ISelectedCard{
    item:ITech
    selectedCard:ITech[]
    setSelectedCard:Dispatch<SetStateAction<ITech[]>>
}
const SelectedCard = ({item, selectedCard, setSelectedCard}:ISelectedCard) => {
    const deleteHandelar=(item:ITech)=>{
      const newSelected = selectedCard.filter(selected => selected.id !== item.id);
      setSelectedCard(newSelected);
      toast.success(`${item.name} has removed`);
    }
    return (
        <div className="border-1 border-pink-300 px-4 py-2 rounded-md my-3">
            <div className="flex justify-between items-center">
               <div className="flex gap-2 items-center">
                 <img className="h-[30px] w-auto " src={item.logo} alt={item.name} />
                <div>
                    <h1 className="font-bold text-xl">{item.name}</h1>
                    <p className="text-gray-400">{item.level}</p>
                </div>
               </div>

                <button
                 onClick={()=>deleteHandelar(item)}
                 className="text-2xl text-red-500 cursor-pointer">X</button>
            </div>
        </div>
    );
};

export default SelectedCard;