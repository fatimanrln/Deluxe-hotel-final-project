import { Component } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { APP_NAVS } from "../../../constants/app";
import { ROUTES } from "../../../constants/routes";
import { Container, FlexBox, Text } from "../../UI";

import s from "./styles.module.scss";

class Header extends Component {
  state = {
    changeStyle: false,
  };

  handleScroll = () => {
    this.setState({ changeStyle: window.scrollY >= 120 });
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <header
        className={classNames(s.header, {
          [s.whiteTheme]: this.state.changeStyle,
        })}
      >
        <Container>
          <FlexBox align="center" justify="space-between" gap={20}>
            <Text
              as="link"
              size={20}
              to={ROUTES.HOME}
              color={this.state.changeStyle ? "black" : "white"}
              weight={700}
            >
              DELUXE
            </Text>
            <nav>
              {APP_NAVS.map(({ title, to }) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classNames(s.link, s.active) : s.link
                  }
                  to={to}
                  key={title}
                >
                  {title}
                </NavLink>
              ))}
            </nav>
          </FlexBox>
        </Container>
      </header>
    );
  }
}

export default Header;
