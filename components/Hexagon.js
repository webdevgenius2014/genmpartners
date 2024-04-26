import React from 'react';
import Link from 'next/link';

const Hexagon = ({ text, href }) => {
  return (
    <div className="">
      {href ? (
        <Link href={href}>
          
        </Link>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default Hexagon;