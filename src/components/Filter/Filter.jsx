import React from 'react';

export const Filter = ({ value, onChange }) => {
    return (
        <label>
            Find contacts by name:
            <input
                type="text"
                value={value}
                name="filter"
                onChange={onChange}
            />
        </label>
    );
};