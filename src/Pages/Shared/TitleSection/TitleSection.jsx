const TitleSection = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-4/12 mx-auto py-8">
      <p className="text-yellow-600 mb-2">{subHeading}</p>
      <h2 className="border-y-4 uppercase text-3xl">{heading}</h2>
    </div>
  );
};

export default TitleSection;
