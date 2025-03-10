const Cover = ({ img, title }) => {
  return (
    <div>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">this is the beautiful and delicious food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
