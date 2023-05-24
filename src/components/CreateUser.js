import React, { useState } from "react";

function CreateUser() {
  const [dropdownStates, setDropdownStates] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [selectedOptions, setSelectedOptions] = useState({});

  const dropdownOptions = [
    {
      id: 1,
      name: "Button 1",
      options: [
        { id: 1, label: "Option 1.1" },
        { id: 2, label: "Option 1.2" },
        { id: 3, label: "Option 1.3" },
      ],
    },
    {
      id: 2,
      name: "Button 2",
      options: [
        { id: 4, label: "Option 2.1" },
        { id: 5, label: "Option 2.2" },
        { id: 6, label: "Option 2.3" },
      ],
    },
    {
      id: 3,
      name: "Button 3",
      options: [
        { id: 7, label: "Option 3.1" },
        { id: 8, label: "Option 3.2" },
        { id: 9, label: "Option 3.3" },
      ],
    },
  ];

  const toggleDropdown = (dropdownId) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownId]: !prevState[dropdownId],
    }));
  };

  const handleParentCheckboxChange = (dropdownId) => {
    const dropdownOptions = getDropdownOptionsById(dropdownId);
    const allOptionIds = dropdownOptions.map((option) => option.id);
    const isAllOptionsSelected = allOptionIds.every((optionId) => selectedOptions[dropdownId]?.includes(optionId));

    if (isAllOptionsSelected) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [dropdownId]: selectedOptions[dropdownId]?.filter((optionId) => !allOptionIds.includes(optionId)),
      }));
    } else {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [dropdownId]: [...selectedOptions[dropdownId] || [], ...allOptionIds],
      }));
    }
  };

  const handleChildCheckboxChange = (dropdownId, optionId) => {
    setSelectedOptions((prevState) => {
      const prevSelectedOptions = prevState[dropdownId] || [];
      const index = prevSelectedOptions.indexOf(optionId);
      if (index > -1) {
        return {
          ...prevState,
          [dropdownId]: prevSelectedOptions.filter((id) => id !== optionId),
        };
      } else {
        return {
          ...prevState,
          [dropdownId]: [...prevSelectedOptions, optionId],
        };
      }
    });
  };

  const getDropdownOptionsById = (dropdownId) => {
    const dropdown = dropdownOptions.find((dropdown) => dropdown.id === dropdownId);
    return dropdown ? dropdown.options : [];
  };

  return (
    <div className="my-custom-container">
      {dropdownOptions.map((dropdown) => (
        <div key={dropdown.id}>
          <button className="my-button" onClick={() => toggleDropdown(dropdown.id)}>
            {dropdown.name}
          </button>
          {dropdownStates[dropdown.id] && (
            <div className="my-dropdown-content">
              <div>
                <label>
                  <input
                    type="checkbox"
                    className="my-checkbox"
                    style={{ width: "20px" }}
                    checked={
                      selectedOptions[dropdown.id]?.length ===
                      getDropdownOptionsById(dropdown.id).length
                    }
                    onChange={() => handleParentCheckboxChange(dropdown.id)}
                  />
                  Select All
                </label>
              </div>
              {getDropdownOptionsById(dropdown.id).map((option) => (
                <div key={option.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="my-checkbox"
                      checked={selectedOptions[dropdown.id]?.includes(option.id)}
                      onChange={() => handleChildCheckboxChange(dropdown.id, option.id)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CreateUser;
