import { Check, WandSparkles } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto space-y-6 px-4 py-20 text-center">
        <h4 className="font-jakarta text-primary-dark text-sm font-bold tracking-[5px] uppercase">
          Why Choose Us
        </h4>
        <h1 className="font-marcellus mb-10 text-5xl leading-tight">
          Experience Peace With Every Pose
        </h1>
        <div className="flex gap-8 pt-6">
          <div className="bg-background-primary flex-1 space-y-4 rounded-tl-2xl rounded-tr-[100px] rounded-b-2xl p-9 text-start">
            <WandSparkles className="text-primary size-11" />
            <h4 className="font-marcellus text-xl">Bespoke Approach</h4>
            <p className="text-text leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper.
            </p>
          </div>
          <div className="bg-background-primary flex-1 space-y-4 rounded-tl-2xl rounded-tr-[100px] rounded-b-2xl p-9 text-start">
            <WandSparkles className="text-primary size-11" />
            <h4 className="font-marcellus text-xl">Bespoke Approach</h4>
            <p className="text-text leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper.
            </p>
          </div>
          <div className="bg-background-primary flex-1 space-y-4 rounded-tl-2xl rounded-tr-[100px] rounded-b-2xl p-9 text-start">
            <WandSparkles className="text-primary size-11" />
            <h4 className="font-marcellus text-xl">Bespoke Approach</h4>
            <p className="text-text leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <Check className="text-primary size-6" />
            <span className="text-text">Best Instructors</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-primary size-6" />
            <span className="text-text">Best Instructors</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-primary size-6" />
            <span className="text-text">Best Instructors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
