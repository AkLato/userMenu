import React from "react";

const ActivityTable = props => (
  <table>
    <thead>
      <tr>
        <th>Activity</th>
        <th>Datetime</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr
            key={user.id}
            onClick={() => {
              props.editRow(user);
            }}
          >
            <td>{user.aktivity.one}</td>
            <td>{user.username}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Žádná aktivita</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ActivityTable;
