const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-3 container mx-auto my-auto h-full max-h-[95vh]">
      {children}
    </div>
  );
};

export default Container;
