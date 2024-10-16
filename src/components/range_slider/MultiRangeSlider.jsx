import { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

const MultiRangeSlider = ({ min, max, step, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);

  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      <div className='slider-container'>
        <input
          type='range'
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          step={step}
          onChange={(e) => {
            const value = Math.min(+e.target.value, maxVal - 500);
            setMinVal(value);
            e.target.value = value.toString();
          }}
          className={`thumb thumb--zindex-3 ${
            minVal > max - 100 ? 'thumb--zindex-5' : ''
          }`}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          step={step}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 500);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className='thumb thumb--zindex-4'
        />
        <div className='slider'>
          <div className='slider__track'></div>
          <div ref={range} className='slider__range'></div>
          <div className='slider__left-value'>{minVal}</div>
          <div className='slider__right-value'>{maxVal}</div>
        </div>
      </div>
    </>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
