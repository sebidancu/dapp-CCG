import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import { ReactComponent as ElrondLogo } from './../../../assets/img/elrond.svg';
import { net } from 'config';

const Navbar = () => {
  const { address } = useGetAccountInfo();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <BsNavbar className='bg-white border-bottom px-4 py-3'>
      <div className='container-fluid'>
        <Link
          className='d-flex align-items-center navbar-brand mr-0'
          to={isLoggedIn ? routeNames.mint : routeNames.home}
        >
          <ElrondLogo className='elrond-logo' />
          <span className='dapp-name text-muted'>{dAppName}</span>
        </Link>
        <div style={{ margin: '30px', fontWeight: '500' }}>
          {net === 'mainnet' ? (
            <div> Mode: 🟢 {net}</div>
          ) : (
            <div>Mode: 🔵 {net}</div>
          )}
        </div>

        <Container>
          <Nav className='ml-auto'>
            <NavItem>
              <div className='d-flex flex-row'>
                <div className='p-2'>
                  <Link className='nav-link' to={routeNames.mint}>
                    NFT PAGE
                  </Link>
                </div>
                {/* <div className='p-2'>
                  <Link className='nav-link' to={routeNames.stake}>
                    Stake
                  </Link>
                </div> */}
                <div className='p-2'>
                  {isLoggedIn == false && (
                    <NavItem>
                      <Link className='nav-link' to={routeNames.unlock}>
                        Login
                      </Link>
                    </NavItem>
                  )}
                  {isLoggedIn && (
                    <NavItem>
                      <button className='btn btn-link' onClick={handleLogout}>
                        Close
                      </button>
                    </NavItem>
                  )}
                </div>
              </div>
            </NavItem>
          </Nav>
        </Container>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
