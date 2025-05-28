import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-background-primary">
        <div className="container mx-auto px-4 py-14">
          <h2>Privatumo politika</h2>
          <p>Atnaujinta: 2025-05-09</p>
        </div>
      </section>
      <section className="container mx-auto space-y-8 px-4 py-14">
        <div>
          <h5 className="pb-2 font-medium">
            1. Asmens duomenų rinkimas ir naudojimas
          </h5>
          <p>
            Mūsų svetainės adresas: [įrašykite savo svetainės adresą, pvz.
            https://nere.lt].
          </p>
        </div>
        <div>
          <h5 className="pb-2 font-medium">2. Kokius duomenis renkame</h5>
          <p>
            Mes nerenkame jokių asmens duomenų tiesiogiai per svetainę.
            Nenaudojame registracijos, prisijungimo ar kontaktinių formų, kurios
            saugotų asmeninius duomenis.
          </p>
        </div>
        <div>
          <h5 className="pb-2 font-medium">
            3. Slapukai ir trečiųjų šalių paslaugos
          </h5>
          <p>Mūsų svetainė naudoja slapukus, kuriuos nustato:</p>
          <p>
            <strong>Google Ads</strong> – siekiant rodyti jums aktualią reklamą.
          </p>
          <p>
            <strong>Facebook Ads (Meta)</strong> – siekiant matuoti reklamos
            efektyvumą ir optimizuoti reklamos kampanijas.
          </p>
        </div>
        <div>
          <h5 className="pb-2 font-medium">4. Slapukų valdymas</h5>
          <p>
            Jūs galite bet kada valdyti ar ištrinti slapukus savo naršyklės
            nustatymuose. Taip pat galite atsisakyti suasmenintos reklamos.
          </p>
        </div>
        <div>
          <h5 className="pb-2 font-medium">5. Kontaktai</h5>
          <p>
            Jei turite klausimų dėl šios privatumo politikos, susisiekite su
            mumis el. paštu:{" "}
            <a className="font-bold" href="mailto:labas@nere.lt">
              labas@nere.lt.
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
