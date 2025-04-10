import React from "react";

const page = () => {
  return (
    <div className="flex-1 gap-10">
      <div className="bg-background-primary flex-1 rounded-[20px] p-6">
        <h6 className="font-marcellus mb-4 text-lg">Ištrinti paskyrą</h6>
        <p className="mb-2 text-sm leading-normal font-medium">
          Dėmesio! Ištrindami savo paskyrą, jūs patvirtinate, kad suprantate
          šiuos veiksmus:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm">
          <li>
            Visi jūsų asmeniniai duomenys bus{" "}
            <strong>visam laikui pašalinti</strong> iš mūsų sistemos.
          </li>
          <li>
            Bus ištrintos <strong>visos jūsų rezervacijos</strong> – tiek
            būsimos, tiek buvusios.
          </li>
          <li>
            Nebegalėsite prisijungti prie šios paskyros ar naudotis mūsų
            paslaugomis.
          </li>
          <li>
            Informacija apie jus nebus pasiekiama nei jums, nei administracijai.
          </li>
          <li>
            <strong>Šio veiksmo negalėsite atšaukti</strong>.
          </li>
        </ul>
        <p className="mt-2 text-sm leading-normal font-medium">
          Jei esate tikri dėl šio sprendimo, paspauskite „Ištrinti paskyrą“.
        </p>

        <button className="mt-3 ml-auto block cursor-pointer rounded-full border border-red-200 bg-red-100/60 px-8 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-red-100">
          Ištrinti paskyrą
        </button>
      </div>
    </div>
  );
};

export default page;
