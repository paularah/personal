import React from 'react';
import DesktopContainer from './Deskstop';
import MobileContainer from './Mobile';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

export default ResponsiveContainer