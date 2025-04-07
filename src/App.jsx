import React from 'react';
import CableSizingTool from './components/CableSizingTool';

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-6">전기 케이블 굵기 자동 계산기</h1>
      <CableSizingTool />
    </div>
  );
};

export default App;
