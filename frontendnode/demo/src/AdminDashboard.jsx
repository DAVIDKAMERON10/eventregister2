// import { useEffect, useState } from 'react';

// const AdminDashboard = () => {
//   const [data, setData] = useState({ colleges: [], shs: [], teachers: [] });

//   const fetchData = async () => {
//     const res = await fetch('http://localhost:5000/api/participants/admin/all');
//     const result = await res.json();
//     setData(result);
//   };

//   const handleDelete = async (category, id) => {
//     if (!window.confirm('Are you sure you want to delete this participant?')) return;
//     await fetch(`http://localhost:5000/api/participants/admin/delete/${category}/${id}`, {
//       method: 'DELETE'
//     });
//     fetchData();
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const renderTable = (items, category) => (
//     <div>
//       <h2>{category.toUpperCase()}</h2>
//       <table border="1" cellPadding="8">
//         <thead>
//           <tr>
//             <th>ID Number</th>
//             <th>Full Name</th>
//             <th>QR Code</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((p) => (
//             <tr key={p._id}>
//               <td>{p.idNumber}</td>
//               <td>{p.firstName} {p.middleInitial}. {p.lastName}</td>
//               <td><img src={p.qrCode} alt="QR" width="80" /></td>
//               <td>
//                 <button onClick={() => handleDelete(category, p._id)}>Delete</button>
//                 <button onClick={() => window.print()}>Print</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {renderTable(data.colleges, 'college')}
//       {renderTable(data.shs, 'shs')}
//       {renderTable(data.teachers, 'teacher')}
//     </div>
//   );
// };

// export default AdminDashboard;
