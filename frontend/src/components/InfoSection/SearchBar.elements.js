import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: flex;
  width: auto;
  max-width: auto;
  background-color:rgb(16, 21, 34);
  padding: 2rem;
  /*background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#1a202c")};*/

 
  z-index: 10;
`;

export const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ lightText }) => (lightText ? "#fff" : "#4a5568")};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 70%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }
`;

export const Select = styled.select`
  width: 80%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }
`;

export const Button = styled.button`
  grid-column: span 2; /* Hace que el botón ocupe toda la fila */
  padding: 0.75rem 1rem;
  background-color: ${({ primary }) => (primary ? "#667eea" : "#4a5568")};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#5a67d8" : "#2d3748")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
   margin-top: 20px;
  font-size: 0.875rem;
  color: ${({ lightText }) => (lightText ? "#fff" : "#4a5568")};
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
 
  width: 1rem;
  height: 1rem;
  accent-color: #667eea;
 
`;