import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-neutral-800">
        <div className="container mx-auto px-4 py-10 text-center md:py-14 lg:py-16">
          <h2 className="text-2xl text-neutral-100 md:text-3xl xl:text-4xl">
            Registruokitės
          </h2>
        </div>
      </section>
      <section className="bg-background container mx-auto flex justify-center px-4 pt-2 pb-14 lg:pt-10 lg:pb-20">
        <div className="mt-8 flex max-w-[500px] flex-1 flex-col gap-4">
          <Input
            name="firstName"
            type="text"
            placeholder="Jūsų vardas"
            className="bg-background-primary rounded-full py-4"
          />
          <Input
            name="LastName"
            type="text"
            placeholder="Jūsų pavardė"
            className="bg-background-primary rounded-full py-4"
          />
          <Input
            name="email"
            type="email"
            placeholder="El. Pašto adresas"
            className="bg-background-primary rounded-full py-4"
          />
          <div className="relative w-full">
            <Input
              type="password"
              name="password"
              placeholder="Slaptažodis"
              className="bg-background-primary rounded-full py-4"
            />
            <button
              type="button"
              className="text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            >
              {/* {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                            )} */}
            </button>
          </div>
          <div className="relative w-full">
            <Input
              type="password"
              name="password"
              placeholder="Pakartokite Slaptažodį"
              className="bg-background-primary rounded-full py-4"
            />
            <button
              type="button"
              className="text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            >
              {/* {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                            )} */}
            </button>
          </div>
          <div className="flex items-center justify-between gap-4 px-1">
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox id="remember" />
              <span className="text-xs text-neutral-600">Prisiminti mane</span>
            </label>
          </div>
          <button className="cursor-pointer rounded-full bg-neutral-800 px-12 py-4 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-neutral-700">
            Registruotis
          </button>
          <div className="text-text my-2 flex items-center justify-center gap-4 text-sm">
            <hr className="bg-background h-[2px] w-full" />
            <span className="text-text text-sm text-nowrap">
              Registruokitės su
            </span>
            <hr className="bg-background h-[2px] w-full" />
          </div>
          <div className="flex gap-4">
            <button className="bg-background-primary flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-neutral-200/50 py-3 text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <FaFacebook size={15} />
              <span>Facebbok</span>
            </button>
            <button className="bg-background-primary flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-neutral-200/50 py-3 text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <FaGoogle size={15} />
              <span>Google</span>
            </button>
          </div>
          <p className="text-center text-sm text-neutral-500">
            Jau turite paskyrą?{" "}
            <Link
              href="/login"
              className="cursor-pointer font-medium text-black/80"
            >
              Prisijunkti
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
