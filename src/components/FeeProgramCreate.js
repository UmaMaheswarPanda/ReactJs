import React, { useState } from "react";

function FeeProgramCreate() {
  const [slabFields, setSlabFields] = useState([{ id: 1 }]);

  const addField = () => {
    const newId = slabFields.length + 1;
    const newField = { id: newId };
    setSlabFields([...slabFields, newField]);
  };

  return (
    <div>
      {slabFields.map((field) => (
        <div key={field.id}>
          <label>
            <div style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
              <div className="textStyle">
                Slab From<span style={{ color: "red" }}>*</span>
              </div>
              <div>
                <select
                  style={{ width: "12rem" }}
                
                >
                
                </select>
              </div>
             
            </div>
          </label>

         
        </div>
      ))}

      <button onClick={addField}>Add Field</button>
    </div>
  );
}

export default FeeProgramCreate;
