"use client";
import { Service } from "@/utils/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Clock, Euro } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { servicesContent } from "@/content/services";

/**
 * * Services component displays a section with a title, subtitle, and a list of services.
 */
const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [displayModalContent, setDisplayModalContent] =
    useState<Service | null>(null);

  const handleDisplayModalContent = (service: Service) => {
    setDisplayModalContent(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setDisplayModalContent(null);
  };

  return (
    <section
      id="services"
      className="bg-background-primary my-8 py-10 lg:py-20"
    >
      <div className="container mx-auto">
        <div className="space-y-4 px-4 pt-10 lg:pt-5">
          <h6>Procedūros</h6>
          <h2 className="pb-8">
            Ritualai, kurie ne tik puoselėja plaukus, bet ir gydo protą
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {servicesContent &&
              servicesContent.map((service, index) => {
                const isLastItem = index === servicesContent.length - 1;
                const isOddLength = servicesContent.length % 2 !== 0;

                const shouldSpanTwoCols = isLastItem && isOddLength;

                return (
                  typeof service === "object" && (
                    <div
                      key={index}
                      className={`${
                        shouldSpanTwoCols
                          ? "col-span-1 md:col-span-2"
                          : "col-span-1"
                      } hover:border-background hover:bg-background gap-8 rounded-3xl border-[1px] border-neutral-200 p-8 transition-colors duration-300 ease-in-out hover:shadow-md lg:p-12`}
                    >
                      <div className="flex-1 space-y-4">
                        <h3>{service.title}</h3>
                        <p className="lg:pr-14">{service.description}</p>
                        <div className="flex gap-6">
                          {service.enableModal && (
                            <Button
                              onClick={() => handleDisplayModalContent(service)}
                              variant="secondary"
                              className="shadow-none"
                            >
                              Skaityti daugiau
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
          </div>
        </div>
      </div>
      <Dialog open={openModal} onOpenChange={handleCloseModal}>
        {displayModalContent && (
          <DialogContent className="max-h-[85vh] w-[365px] max-w-2xl overflow-y-auto p-8 sm:w-full">
            <DialogHeader className="space-y-4 pt-2 text-start">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <DialogTitle className="flex-1 text-2xl font-medium">
                  {displayModalContent.title}
                </DialogTitle>

                <div className="font-jakarta flex items-center gap-2">
                  <span className="flex items-center gap-3 rounded-full border border-neutral-400 px-4 py-2 text-xs font-medium">
                    <Clock className="size-4" />
                    {displayModalContent.duration.from}{" "}
                    {displayModalContent.duration?.to
                      ? `- ${displayModalContent.duration.to}`
                      : null}{" "}
                    min
                  </span>
                  <span className="flex items-center gap-3 rounded-full border border-neutral-400 px-4 py-2 text-xs font-medium">
                    <Euro className="size-4" />
                    {displayModalContent.price} €
                  </span>
                </div>
              </div>

              {displayModalContent.modalContent?.enableAditionalNote && (
                <div className="font-jakarta rounded-xl bg-[#c8e5d946] px-8 py-3 text-sm text-neutral-700">
                  <ul className="font-jakarta list-disc text-sm text-neutral-700">
                    {displayModalContent.modalContent.additionalNote?.map(
                      (note, index) => (
                        <li key={index} className="text-neutral-700">
                          {note.note}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

              {displayModalContent.modalContent?.description && (
                <DialogDescription className="text-sm text-neutral-700">
                  {displayModalContent.modalContent?.description}
                </DialogDescription>
              )}
              {displayModalContent.modalContent?.features && (
                <div>
                  {displayModalContent.modalContent.featuresTitle && (
                    <h4 className="font-jakarta -mt-1 pb-1 text-sm font-medium">
                      {displayModalContent.modalContent.featuresTitle}
                    </h4>
                  )}
                  <ul className="font-jakarta list-disc pl-5 text-sm text-neutral-700">
                    {displayModalContent.modalContent.features.map(
                      (feature, index) => (
                        <li key={index} className="text-neutral-700">
                          {feature.feature}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
              {displayModalContent.modalContent?.note && (
                <div className="font-jakarta mt-2 rounded-xl bg-[#c8e5d946] px-4 py-3 text-sm text-neutral-700">
                  {displayModalContent.modalContent?.note}
                </div>
              )}
            </DialogHeader>
            <DialogFooter className="space-x-2">
              <button className="flex pt-2" onClick={handleCloseModal}>
                <a
                  href="https://book.treatwell.lt/salonas/nere-head-spa/"
                  target="_blank"
                  className="font-jakarta hover:bg-background w-full rounded-full border border-transparent bg-neutral-800 px-10 py-3 text-sm font-normal text-white transition-all duration-300 ease-in-out hover:border-neutral-500 hover:text-neutral-800"
                >
                  Rezervuoti laiką
                </a>
              </button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Services;
