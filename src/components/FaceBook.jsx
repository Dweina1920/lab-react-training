import React from 'react';
import profiles from '../data/berlin.json';
import { useState } from 'react';

const initialCountryList = profiles.map((profile) => profile.country);

const countryList = initialCountryList.filter(
  (item, index) => initialCountryList.indexOf(item) === index
);

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleClick = (e) => {
    setSelectedCountry(e.target.textContent);
    console.log(e.target.textContent);
  };
  console.log(selectedCountry);
  const buttons = (
    <div>
      {' '}
      {countryList.map((country) => (
        <button
          style={{
            backgroundColor: country === selectedCountry ? 'green' : '',
          }}
          onClick={handleClick}
          className="p-4 border "
        >
          {country}
        </button>
      ))}{' '}
    </div>
  );
  let listaFacebook = profiles.map((person) => (
    <li
      style={{
        backgroundColor: person.country === selectedCountry ? 'green' : '',
      }}
      className="bg-slate-200 flex h-40 m-8 rounded-lg w-96"
    >
      <div>
        <img className="h-40 w-40 rounded-full p-4" src={person.img}></img>
      </div>
      <div className=" d-column justify-center aligne-center pt-8">
        <p id="name" className="text-left">
          {person.firstName + ' ' + person.lastName}
        </p>

        <p id="car " className="text-left">{`${
          person.isStudent ? 'Student' : 'Teacher'
        } from ${person.country}`}</p>
      </div>
    </li>
  ));
  return (
    <div className="facebook__buttons">
      {buttons}
      <ul>{listaFacebook}</ul>
    </div>
  );
}

export default FaceBook;
