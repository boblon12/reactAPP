import React from 'react'

function MySelect({options, defaltvalue, value, onChangeValue}) {
    return (
        <select
        value={value}
        onChange={event => {onChangeValue(event.target.value)}}>
            <option disabled={true} value="">{defaltvalue}</option>
            {options.map(option => <option key = {option.value} value={option.value}>{option.name}</option>)}
        </select>
    )
}
 
export default MySelect