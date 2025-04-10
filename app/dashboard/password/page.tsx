import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 gap-10">
      <div className="bg-background-primary flex-1 rounded-[20px] p-6">
        <h6 className="font-marcellus text-lg">Pakeisti slaptažodį</h6>
        <div className="text-text mt-4 flex flex-col gap-2 text-sm">
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-text text-sm">Senas slaptažodis</p>
              <Input
                name="oldPassword"
                placeholder="Įveskite savo seną slaptažodį"
                type="password"
              />
            </div>
            <div className="space-y-2">
              <p className="text-text text-sm">Naujas slaptažodis</p>
              <Input
                name="newPassword"
                placeholder="Įveskite naują slaptažodį"
                type="password"
              />
            </div>
            <div className="space-y-2">
              <p className="text-text text-sm">
                Pakartotinai įveskite naują slaptažodį
              </p>
              <Input
                name="newPasswordSecond"
                placeholder="Įveskite naują slaptažodį"
                type="password"
              />
            </div>
          </div>
          <button className="bg-secondary hover:bg-secondary/80 mt-4 w-full cursor-pointer rounded-full px-6 py-3 text-sm shadow-md transition-colors duration-200 ease-in-out">
            Išsaugoti slaptažodį
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
