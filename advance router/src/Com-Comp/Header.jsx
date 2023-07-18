import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Header() {
    const [showNavColorThird, setShowNavColorThird] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand>
                        <Link to="home">Home</Link>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorThird(!showNavColorThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorThird} navbar>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page'>
                                    <Link to="about">About</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink>
                                    <Link to="contact">Contact</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink>
                                    <Link to="product">Product</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Outlet></Outlet>
        </>
    );
}