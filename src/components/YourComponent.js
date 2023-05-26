// import React, { useState } from 'react';
// import axios from 'axios';

// const YourFormComponent = () => {
//   const [roleType, setRoleType] = useState('');
//   const [roleName, setRoleName] = useState('');
//   const [status, setStatus] = useState('');
//   const [pageSize, setPageSize] = useState('10');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Prepare the data to be sent to the server
//     const formData = {
//       roleType,
//       roleName,
//       status,
//       pageSize,
//     };

//     try {
//       // Send the data to the server
//       const response = await axios.post('${API_URL}/access-role-search', formData);
//       // Process the server response if needed
//       console.log(response.data);
//     } catch (error) {
//       // Handle any error that occurred during the request
//       console.error(error);
//     }
//   };

//   const resetSearchRole = () => {
//     // Reset the form fields
//     setRoleType('');
//     setRoleName('');
//     setStatus('');
//     setPageSize('10');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset className="col-sm-3">
//         <label>Role Type</label>
//         <select
//           className="form-control"
//           value={roleType}
//           onChange={(event) => setRoleType(event.target.value)}
//         >
//           {/* Render the options dynamically */}
//         </select>
//         {/* Render the error message if needed */}
//       </fieldset>
//       <fieldset className="col-sm-3">
//         <label>Role Name</label>
//         <input
//           type="text"
//           className="form-control"
//           value={roleName}
//           onChange={(event) => setRoleName(event.target.value)}
//         />
//         {/* Render the error message if needed */}
//       </fieldset>
//       <fieldset className="col-sm-3">
//         <label>Status</label>
//         <select
//           className="form-control"
//           value={status}
//           onChange={(event) => setStatus(event.target.value)}
//         >
//           {/* Render the options dynamically */}
//         </select>
//         {/* Render the error message if needed */}
//       </fieldset>
//       <fieldset className="col-sm-3">
//         <label>Records per Page</label>
//         <select
//           className="form-control"
//           value={pageSize}
//           onChange={(event) => setPageSize(event.target.value)}
//         >
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="50">50</option>
//           <option value="100">100</option>
//           <option value="250">250</option>
//           <option value="500">500</option>
//           <option value="1000">1000</option>
//         </select>
//       </fieldset>
//       {/* Render the rest of your form */}
//       <div className="col-sm-12 form-action-buttons">
//         <div className="col-sm-5"></div>
//         <div className="col-sm-7">
//           <input
//             type="submit"
//             value="Search"
//             className="form-control button pull-right"
//             onClick={trimUserData}
//           />
//           <input
//             type="button"
//             className="form-control button pull-right"
//             value="Reset"
//             onClick={resetSearchRole}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default YourFormComponent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8084/access-role-create');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Render the fetched data */}
      {data && (
        <div>
          {/* Access the specific properties of the fetched data */}
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default YourComponent;

