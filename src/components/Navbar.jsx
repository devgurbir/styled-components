import StyledNavbar from "./styled/Navbar.styled";
import DrawerItem from "./DrawerItem";
import StyledFlexDiv from "./styled/FlexDiv.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <StyledFlexDiv flexDirection="row">
        <DrawerItem label="SiteName" />
      </StyledFlexDiv>

      <StyledFlexDiv
        flexDirection="row"
        justifySelf="end"
        style={{ flex: "1", justifyContent: "end" }}
      >
        <DrawerItem label="About Us" />
        <DrawerItem label="Prices" />
        <DrawerItem label="Start Page" />
        <DrawerItem label="Offer" />
        <DrawerItem label="Contact" />
      </StyledFlexDiv>
    </StyledNavbar>
  );
}

export default Navbar;
