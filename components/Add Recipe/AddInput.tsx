import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

interface Props {
  placeholder: string;
  inputs: string[];
  onAddInput: () => void;
  onRemoveInput: (index: number) => void;
  onInputChange: (index: number, value: string) => void;
}

const AddInput: React.FC<Props> = ({
  placeholder,
  inputs,
  onAddInput,
  onRemoveInput,
  onInputChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {inputs.map((input, index) => (
        <div key={index} className="flex items-start gap-2 flex-col">
          <div className="flex w-full relative">
            <input
              type="text"
              placeholder={placeholder}
              value={input}
          
              onChange={(e) => onInputChange(index, e.target.value)}
              className="w-full border-2 border-slate-300 relative z-10 rounded-lg outline-none p-2 "
            />
            {index !== 0 && (
              <button
                onClick={() => onRemoveInput(index)}
                className="text-main px-3 py-1 rounded-lg absolute z-10  -right-10 top-1 ml-2"
              >
                <TiDelete size={28} />
              </button>
            )}
          </div>
          {index === inputs.length - 1 && (
            <button
              onClick={onAddInput}
              className="text-green-600 py-1 rounded"
            >
              <IoIosAddCircle size={28} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

AddInput.displayName = "AddInput";

export default AddInput;
