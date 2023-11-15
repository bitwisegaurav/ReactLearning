import PropTypes from 'prop-types';
function InputBox(props) {
    const from = props.from ?? false;
    const values = props.values;
    const keys = Object.keys(values.data);

  return (
    <div>
      <label htmlFor="something" className="text-gray-200">
        {from ? "From" : "To"}
      </label>
      <select
        name="options"
        id="options"
        value={from ? values.fromCurr : values.toCurr}
        onChange={(e) => {
            if(from) {
            values.setFromCurr(e.target.value);
          } else {
            values.setToCurr(e.target.value);
          }
        }}
        className="float-right px-2 py-1 rounded-lg foucs:outline-none hover:cursor-pointer">
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
        value={from ? (!isNaN(values.fromAmount) ? values.fromAmount : 1) : (!isNaN(values.toAmount) ? values.toAmount : 1)}
        onChange={(e) => { 
            const amount = parseFloat(e.target.value);
            if(!isNaN(amount)) {
                if(from) values.setFromAmount(amount);
                else values.setToAmount(amount);
            }
        }}
        className="w-full px-4 py-2 mt-4 rounded-lg focus:outline-none"
        min={0}/>
    </div>
  )
}

InputBox.propTypes = {
    from: PropTypes.bool,
    values: PropTypes.shape({
        fromCurr: PropTypes.string,
        toCurr: PropTypes.string,
        fromAmount: PropTypes.number,
        toAmount: PropTypes.number,
        conversion: PropTypes.number,
        data: PropTypes.object,
        setConversion: PropTypes.func.isRequired,
        setFromAmount: PropTypes.func.isRequired,
        setToAmount: PropTypes.func.isRequired,
        setFromCurr: PropTypes.func.isRequired,
        setToCurr: PropTypes.func.isRequired
    })
}

export default InputBox