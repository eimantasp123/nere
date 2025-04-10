import { WandSparkles } from "lucide-react";

const content = [
  {
    id: 1,
    title: "Bespoke Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    icon: <WandSparkles className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 2,
    title: "Bespoke Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    icon: <WandSparkles className="text-primary size-8 lg:size-11" />,
  },
  {
    id: 3,
    title: "Bespoke Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    icon: <WandSparkles className="text-primary size-8 lg:size-11" />,
  },
];

/**
 * * WhyChooseUs component displays a section with a title, subtitle, and a list of features or benefits.
 */
const WhyChooseUs = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto space-y-6 px-4 py-8 text-center lg:py-20">
        <h4>Why Choose Us</h4>
        <h2>Experience Peace With Every Pose</h2>
        <div className="scrollbar-none flex gap-8 overflow-x-auto py-8 lg:py-12">
          {content.map((obj) => (
            <div
              key={obj.id}
              className="bg-background-primary min-w-[300px] flex-1 space-y-4 rounded-tl-2xl rounded-tr-[100px] rounded-b-2xl p-7 text-start lg:p-9"
            >
              {obj.icon}
              <h5>{obj.title}</h5>
              <p className="text-text leading-[28px]">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
