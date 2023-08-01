import TitleSection from "../../Shared/TitleSection/TitleSection";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="bg-no-repeat bg-cover text-white bg-opacity-10 bg-fixed"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <TitleSection
        heading={"From Our Menu"}
        subHeading={"--Check it Out---"}
      ></TitleSection>
      <div className="flex justify-center items-center py-16 bg-slate-500 bg-opacity-60 px-8">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="ml-8">
          <h3>August, 2023</h3>
          <h2 className="uppercase">Where Can I get some?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            praesentium ullam beatae nihil vitae reprehenderit perferendis cum
            sit natus ut adipisci iure quod ratione placeat tempora! Ipsum in a
            quis similique repellendus ad sit saepe eum ab ex, error, excepturi
            voluptatem quasi consectetur iusto molestias ipsa et numquam
            officiis consequatur?
          </p>
          <button className="btn btn-outline my-4 text-white border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
