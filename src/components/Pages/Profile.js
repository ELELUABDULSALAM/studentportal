import React from "react";

function Profile() {
  var profile = JSON.parse(localStorage.getItem("profile"));
  console.log(typeof profile);
  console.log(profile);
  const {
    firstName,
    surname,
    email,
    memberType,
    phoneNumber,
    address,
    memberClass,
    gender,
  } = profile;

  return (
    <>
      <div>First: {firstName}</div>
      <div>Surname: {surname}</div>
      <div>Class: {email}</div>
      <div>Email: {memberType}</div>
      <div>Phone Number: {phoneNumber}</div>
      <div>Address: {address}</div>
      <div>Gender: {gender}</div>
    </>
  );
}

export default Profile;
