import StyledDrawerItem from "./styled/DrawerItem.styled";

function DrawerItem({ label, icon }) {
  return (
    <StyledDrawerItem>
      {icon && (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            {icon}
          </svg>
        </div>
      )}
      <div>{label}</div>
    </StyledDrawerItem>
  );
}

export default DrawerItem;
