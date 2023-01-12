import React from "react";
import { useParams } from "react-router-dom";

export function Add() {
  let { a, b } = useParams();
  let result = parseInt(a) + parseInt(b);
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}

export function Sub() {
  let { a, b } = useParams();
  let result = parseInt(a) - parseInt(b);
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}

export function Mul() {
  let { a, b } = useParams();
  let result = parseInt(a) * parseInt(b);
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}

export function Div() {
  let { a, b } = useParams();
  let result = parseInt(a) / parseInt(b);
  if (parseInt(b) === 0){
    return (
      <div>
        <h1>Can't divide by 0</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}
