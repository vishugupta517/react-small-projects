import MultiRangeSlider from './MultiRangeSlider';

const RangeSlider = () => {
  return (
    <MultiRangeSlider
      min={0}
      max={5000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      step={500}
    />
  );
};

export default RangeSlider;
