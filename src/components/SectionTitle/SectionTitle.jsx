const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-8 w-3/12 mb-4">
      <p className="text-yellow-500">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
