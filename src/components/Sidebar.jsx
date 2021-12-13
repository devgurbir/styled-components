import DrawerItem from "./DrawerItem";
import "../styles.css";
import StyledSidebar from "./styled/Sidebar.styled";

const icons = {
  inbox: (
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
    </>
  ),
  mail: (
    <>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </>
  ),
  sendEmail: (
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z" />
    </>
  ),
  y: (
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
    </>
  )
};

function Sidebar() {
  return (
    <StyledSidebar>
      <DrawerItem label="Inbox" icon={icons.inbox} />
      <DrawerItem label="Starred" icon={icons.mail} />
      <DrawerItem label="Send email" icon={icons.sendEmail} />
      <DrawerItem label="Drafts" icon={icons.mail} />
    </StyledSidebar>
  );
}

export default Sidebar;
