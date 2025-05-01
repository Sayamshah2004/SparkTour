const UsersTable = ({ searchTerm }) => {
  // Dummy data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "1234567890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "9876543210",
    },
    {
      id: 3,
      name: "Alice Brown",
      email: "alice@example.com",
      contact: "5555555555",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Details</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UsersTable;
