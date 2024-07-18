'use client'
import React, { useState, useEffect } from 'react';
import { builder } from '@builder.io/react';
import { RenderBuilderContent } from '../../components/builder';


const CustomBuilderComponent = ({ model }) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const [customState, setCustomState] = useState('Initial State');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const content = await builder.get(model).promise();
        setState({ data: content, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error.message });
      }
    };

    fetchData();
  }, [model]);

  const handleButtonClick = () => {
    setCustomState('State after button click');
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div>
      <h1>Custom Builder Component</h1>
      <button onClick={handleButtonClick}>Click Me</button>
      <p>Custom State: {customState}</p>
      {/* <BuilderComponent model={model} content={state.data} /> */}
      <RenderBuilderContent content={state.data} model={model} />
    </div>
  );
};

export default CustomBuilderComponent;
