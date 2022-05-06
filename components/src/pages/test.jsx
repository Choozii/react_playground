import React, { useState } from 'react';
import BottomSheet from '../components/bottom_sheet';
const Test = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  return (
    <>
      <div onClick={() => setShowBottomSheet(!showBottomSheet)}>bottom Sheet toggle</div>
      <BottomSheet show={showBottomSheet} />
    </>
  );
};

export default Test;
