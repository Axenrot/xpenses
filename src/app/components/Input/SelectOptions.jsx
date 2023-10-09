const SelectOptions = ({ options = {}, setSelectedOption = () => {} }) => {
  return (
    <span className="absolute flex flex-col gap-1 p-1 border-2 rounded-md top-[105%] right-1 bg-charcoal text-white">
      {Object.values(options)?.map((option, index) => (
        <span
          key={`option-${index}`}
          className="transition-all duration-200 hover:text-butter"
          onClick={() => {
            setSelectedOption(Object.keys(options)[index]);
          }}
        >
          {option}
        </span>
      ))}
    </span>
  );
};

export default SelectOptions;
