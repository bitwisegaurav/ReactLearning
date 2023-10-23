import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function fetchData(currency, setData){
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())
    .then(res => {
      setData(res[currency]);
    })
}

function InputBox(props) {
  const [data, setData] = useState([]);
  const [selectValue, setSelectValue] = useState(props.currency);

  useEffect(() => {
    fetchData(props.currency, setData);
  }, [props.currency]);

  const keys = Object.keys(data);
  return (
    <div>
      <label htmlFor="something" className="text-gray-200">
        {props.label}
      </label>
      <select
        name="options"
        id="options"
        className="float-right px-4 py-2 rounded-lg foucs:outline-none hover:cursor-pointer"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {keys.map((key) => {
          return (
            <option key={key} value={key}>
              {key}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        id="something"
        value={props.value}
        onChange={(e) => props.setValue(Number(e.target.value))}
        className="w-full px-5 py-3 mt-10 rounded-lg focus:outline-none"
        min={0}
      />
    </div>
  );
}

InputBox.propTypes = {
  currency: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default InputBox;