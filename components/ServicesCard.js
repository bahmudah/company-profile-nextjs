import Image from "next/image";

export default function ServicesCard({ skill, level, image }) {
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <Image
        src={image}
        alt="icon skill"
        className="rounded-full"
        width="53"
        height="53"
      ></Image>

      <div className="ml-6">
        <h4 className="text-lg font-semibold">{skill}</h4>
        <p className="text-sm text-gray-500 font-semibold mt-0.5">{level}</p>
      </div>
    </div>
  );
}
