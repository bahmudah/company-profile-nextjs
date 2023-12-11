import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import ServicesCard from "./ServicesCard";

export default function SkillSection() {
  return (
    <section className="py-32 bg-primarygray" id="services">
      <div className="container mx-auto">
        <SectionTitle></SectionTitle>
        <SectionSubtitle>
          Unlocking Potential with Cutting-Edge Coding Programs.
        </SectionSubtitle>
        <div className="flex -m-px-6 mt-20 flex-wrap lg:px-6">
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="JavaScript"
              level="Beginner"
              image="/javascript.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="React Js"
              level="Beginner"
              image="/react.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="Node Js"
              level="Beginner"
              image="/nodejs.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="JavaScript"
              level="Intermediate"
              image="/javascript.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="React Js"
              level="Intermediate"
              image="/react.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="Node Js"
              level="Intermediate"
              image="/nodejs.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="JavaScript"
              level="Advanced"
              image="/javascript.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="React Js"
              level="Advanced"
              image="/react.svg"
            />
          </div>
          <div className="md:w-4/12 w-full px-6 pb-10">
            <ServicesCard
              skill="Node Js"
              level="Advanced"
              image="/nodejs.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
