import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

import './navbar.scss'
export default class AppNavbar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { onClicked } = this.props
        return (
            <div className="Navbar">
                <Navbar color="light" light expand="md" className="nvbg">
                    <NavbarBrand href="/" >
                        <div className="brand">
                            <img src="/assets/Val.png" alt="logo" />
                            <span >Val-Memoir</span>
                        </div>

                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto wht_txt" navbar>
                            <NavItem>
                                <NavLink href="#">
                                    <button className="btn btnaction" onClick={() => onClicked('share', 'Add Story')}>Share Story</button>
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}





{/* <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
        Settings
                                </DropdownToggle>
    <DropdownMenu right>
        <DropdownItem>
            Option 1
                                        </DropdownItem>
        <DropdownItem>
            Option 2
                                    </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
            Reset
                                    </DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown> */}