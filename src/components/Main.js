import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import MainContent from './MainContent';
import Color from '../constants/Color'
import Size from '../constants/Size'
import Header from './Header'
import SideBar from './SideBar'

const Main = props => {
  return (
    <Page>
     <Header />
     <MainWrapper>
       <SideWrapper>
         <SideBar />
           </SideWrapper>
         <ContentWrapper>
           <MainContent />
         </ContentWrapper>
     </MainWrapper>
  </Page>
  
  );

}
export default Main

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
`

const SideWrapper = styled.div`
  width: ${Size.SideWrapper.width}px;
  position: fixed;
  padding-top: 59px;
  min-height: 100%;
  background-color: ${Color.Gray};
`

const ContentWrapper = styled.div`
  position: relative;
  left: ${Size.SideWrapper.width}px;
  width: calc(100% - ${Size.SideWrapper.width}px);
  overflow-y: auto;
  text-align: left;
  height: calc(100vh - ${Size.Header.height}px - 1px);
`

const Page = styled.div`
  ${props =>
    props.show_modal &&
    css`
      -webkit-filter: blur(4px);
      filter: blur(4px);
    `};
`