import React, { useState } from "react";
import {
  SearchBarContainer,
  Form,
  Label,
  Input,
  Select,
  Button,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
} from "./SearchBar.elements";

const SearchBar = ({
  primary,
  lightBg,
  lightText,
  defaultDates,
  petTypes,
  neighborhoods,
}) => {
  const [startDate, setStartDate] = useState(defaultDates.startDate);
  const [endDate, setEndDate] = useState(defaultDates.endDate);
  const [petCount, setPetCount] = useState(1);
  const [petType, setPetType] = useState([]);
  const [location, setLocation] = useState("");

  const handlePetTypeChange = (type) => {
    setPetType((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ startDate, endDate, petCount, petType, location });
  };

  return (
    <SearchBarContainer lightBg={lightBg}>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label lightText={lightText}>Fecha de inicio</Label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <Label lightText={lightText}>Fecha de fin</Label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <Label lightText={lightText}>Cantidad de mascotas</Label>
          <Input
            type="number"
            value={petCount}
            min={1}
            onChange={(e) => setPetCount(e.target.value)}
          />
        </div>
        <div>
          <Label lightText={lightText}>Tipo de mascota</Label>
          <CheckboxContainer>
            {petTypes.map((type) => (
              <CheckboxLabel key={type} lightText={lightText}>
                <Checkbox
                  checked={petType.includes(type)}
                  onChange={() => handlePetTypeChange(type)}
                />
                {type}
              </CheckboxLabel>
            ))}
          </CheckboxContainer>
        </div>
        <div>
          <Label lightText={lightText}>Barrio</Label>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Selecciona un barrio</option>
            {neighborhoods.map((neighborhood) => (
              <option key={neighborhood} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </Select>
        </div>
        <Button type="submit" primary={primary}>
          Buscar
        </Button>
      </Form>
    </SearchBarContainer>
  );
};
export default SearchBar;