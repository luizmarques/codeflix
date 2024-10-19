'use client';
import React, { useEffect } from 'react';

// eslint-disable-next-line
export default function Error({ error }: any) {
  useEffect(() => {
    console.log('logging error:', error);
  }, [error]);
  return (
    <div className='text-red-500'>
			<h1 className='border border-dashed border-red-500 p-4'> User Error</h1>
			<div>
				<p>Something went wrong with Users</p>
			</div>
    </div>
  );
}
