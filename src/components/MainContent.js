import React, { Component } from 'react';
import styled from 'styled-components'
import Size from '../constants/Size'



const MainContent = () => {
  return (
    <Content>
             MainContent!!!!
    </Content>
    );
}
export default MainContent




const Content = styled.div`
  height: ${Size.Header.height}px;
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid blue;
`