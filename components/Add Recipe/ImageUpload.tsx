"use client";
import { ImageUploadProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";



const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload,setSelectedFile,selectedFile }) => {


const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files && event.target.files[0];
  if (file) {
    setSelectedFile(file);
    onUpload([file]);
  }
};


  return (
    <div className="flex flex-col items-start gap-2 justify-center w-full">
        <label
          htmlFor="image"
          className="relative cursor-pointer flex flex-col w-full h-32 border-2 rounded-xl bg-white border-slate-300 "
        >
          <div className="flex flex-col items-center justify-center pt-2">
            <Image src="/imagee.svg" alt="image" width={80} height={100} />
            <p className="pt-1 text-md tracking-wider text-slate-400 ">
              Add a photo
            </p>
          </div>
          <input
            id="image"
            type="file"
            accept="image/*"
            className="sr-only"
            disabled={selectedFile !== null}
            onChange={handleFileChange}
            multiple
          />
        </label>
      
      <div className="flex gap-3">
        {selectedFile && (
          <div
            className={`flex flex-col-reverse rounded-md  bg-main-light relative border-2  border-slate-300`}
          >
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              width={80}
              height={80}
              className=" object-cover h-24 w-24 rounded-md"
            />
            <button
              type="button"
              className="text-red-600 hover:text-red-800 focus:outline-none absolute top-0 left-0"
              onClick={()=> setSelectedFile(null)}
            >
              <MdDelete size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
