import React from 'react';

const CustomerCard = ({ customer }) => (
    <div className="flex items-center mt-8">
      <img
        className="w-32 h-auto mr-4 "
        src={customer.customerImage}
        alt={customer.company}
      />
    </div>
);

export default CustomerCard;
