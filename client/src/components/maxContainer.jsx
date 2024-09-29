const MaxContainer = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-[24px] lg:px-[60px]">
      {children}
    </div>
  );
};

export default MaxContainer;
