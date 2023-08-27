"use client"
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const GoogleAddressAutoComplete = ({ onSelect }) => {
  const [address, setAddress] = useState('');

  const handleChange = newAddress => {
    setAddress(newAddress);
  };

  const handleSelect = async newAddress => {
    setAddress(newAddress);
    try {
      const results = await geocodeByAddress(newAddress);
      const latLng = await getLatLng(results[0]);
      onSelect(newAddress, latLng);
    } catch (error) {
      console.error('Error fetching address details', error);
    }
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      googleCallbackName="initMap"
//   debounce={300}
  apiKey="AIzaSyC_njDZE_3IOIeIhbMeJAJVfbzN8xBEjK8"
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Type an address...',
              className: 'form-control',
              id: 'address-input', // Add an ID to the input field
            })}
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item active'
                : 'suggestion-item';
              return (
                <div
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                  })}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default GoogleAddressAutoComplete;
