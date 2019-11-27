import React, { useState, useEffect } from 'react';
import { fetchRequests } from './api';
import { Link } from 'react-router-dom';

const AdminHome = ({ token }) => {
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    if (token) {
      fetchRequests(token).then(res => setAllRequests(res));
    }
  }, [token]);

  const renderRequests = () => {
    return allRequests.map(r => {
      return (
        <li key={r.id}>
          <Link to={`/requests/${r.id}`}>
            <ul id='admin-list'>
              <li>{r.date}</li>
            </ul>
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <ul id='all-requests-list'>{token ? renderRequests() : null}</ul>
    </>
  );
};

export default AdminHome;