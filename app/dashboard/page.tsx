import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="flex-1 gap-10">
      <div className="bg-background-primary flex-1 rounded-[20px] p-6">
        <h6 className="font-marcellus text-lg">Asmeninė informacija</h6>
        <div className="text-text mt-4 flex flex-col gap-2 text-sm">
          <div className="grid gap-3 md:grid-cols-2 md:gap-6">
            <div className="space-y-2">
              <p className="text-text text-sm">Vardas</p>
              <Input name="firstName" placeholder="Jūsų vardas" type="text" />
            </div>
            <div className="space-y-2">
              <p className="text-text text-sm">Pavardė</p>
              <Input name="firstName" placeholder="Jūsų pavardė" type="text" />
            </div>
            <div className="space-y-2">
              <p className="text-text text-sm">El. pašto adresas</p>
              <Input name="email" placeholder="El. paštas" type="email" />
            </div>
            <div className="space-y-2">
              <p className="text-text text-sm">Telefono numeris</p>
              <Input name="phone" placeholder="Telefono numeris" type="phone" />
            </div>
          </div>
          <button className="bg-secondary hover:bg-secondary/80 mt-4 w-full cursor-pointer rounded-full px-6 py-3 text-sm shadow-md transition-colors duration-200 ease-in-out">
            Išsaugoti informacija
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
