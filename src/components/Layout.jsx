import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
