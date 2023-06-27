import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {
  const renderType = (isStudent) => {
    return isStudent ? 'Student' : 'Teacher';
  };

  return profiles.map((profile) => (
    <div>
      <div
        style={{
          padding: '50px',
          backgroundColor: '#e5dcdc',
          margin: '20px',
          borderRadius: '20px',
        }}
      >
        <img
          style={{ borderRadius: '65px', border: '2px solid grey' }}
          src={profile.img}
          alt="weirdoDude"
        />
        <div
          style={{
            border: '2px solid grey',
            backgroundColor: 'white',
            borderRadius: '20px',
          }}
        >
          <h3> First Name: {profile.firstName}</h3>
          <h3>Last Name:{profile.lastName}</h3>
          <h3>Country:{profile.country}</h3>
          <h3>Type:{renderType(profile.isStudent)}</h3>
        </div>
      </div>
    </div>
  ));
};

export default Facebook;
