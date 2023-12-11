import Image from "next/image";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import Button from "./Button";
import AboutUs from "../pages/About/About";

export default function AboutUsSection() {
  return (
    <section className="py-32" id="about-us">
      <div className="container mx-auto">
        <SectionTitle></SectionTitle>
        <SectionSubtitle>
          Elevate Every Learning Experience with JF.co - Transforming Vision and
          Mission into Coding Mastery through Creative Pedagogy and Unwavering
          Commitment.
        </SectionSubtitle>

        <div className="flex flex-wrap item-center w-9/12 mx-auto mt-20">
          <div className="md:w-5/12 w-full px-6 mb-10 md:mb-0">
            <Image
              src="/phofil.png"
              alt="profile photo"
              className="w-full"
              width="289"
              height="417"
            />
            <p className="font-bold mt-5">James Franco - Founder & CEO JF.CO</p>
          </div>
          <div className="md:w-7/12 w-full px-10 my-auto">
            <p className="text-lg leading-relaxed">
              At JF.CO Coding Bootcamp, we&apos;re a dedicated team passionate
              about innovation and excellence in coding education. Believing in
              the transformative power of technology, we go beyond products and
              services to craft immersive learning experiences. With
              cutting-edge solutions and unwavering commitment, we bring our
              vision to life through creative teaching. Join us on this journey
              of achievement at JF.CO Coding Bootcamp.
            </p>
            <Button variant="outline-yellow" href={AboutUs} className="mt-10">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
