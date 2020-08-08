import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api/index';
import { NativeSelect } from '@material-ui/core';
const CountryPicker = (props) => {
    const [fetchCountriesData, SetFetchCountries] = useState([]);

    const fetchCountryAPI = async () => {
        SetFetchCountries(await fetchCountries());
    }

    useEffect(() => {
        fetchCountryAPI();

    }, [])
    console.log(fetchCountriesData, 'fetchCountries COUNTRY PICKER-->')
    return (
        <div>
            <NativeSelect onChange={(e) => props.onChangeCountryHandler(e.target.value)}>
                <option value="global">
                    Global
                </option>
                {fetchCountriesData.map((fetchCountry, index) =>
                    <option key={index}
                        value={fetchCountry}>
                        {fetchCountry}
                    </option>)}
            </NativeSelect>
        </div>
    )
}

export default CountryPicker;