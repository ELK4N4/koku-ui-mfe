import { Nav, NavItem, NavList } from '@patternfly/react-core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  children?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Optimizations Badge',
      path: '/ros/optimizations/badge',
    },
    {
      title: 'Optimizations Link',
      path: '/ros/optimizations/link',
    },
    {
      title: 'Optimizations Summary',
      path: '/ros/optimizations/summary',
    },
    {
      title: 'Optimizations Table',
      path: '/ros/optimizations/table',
    },
    {
      title: 'Optimizations Details',
      path: '/ros/optimizations/details',
    },
    {
      title: 'Optimizations Breakdown',
      path: '/ros/optimizations/breakdown',
    },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #d2d2d2',
          padding: '1rem',
        }}
      >
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>ROS MFE</h2>
        <Nav>
          <NavList>
            {navigationItems.map(item => (
              <NavItem key={item.path} isActive={location.pathname === item.path}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.title}
                </Link>
              </NavItem>
            ))}
          </NavList>
        </Nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '2rem' }}>{children}</div>
    </div>
  );
};

export default Navigation;
