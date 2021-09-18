import NavDrawerSocialIconButtons from 'components/nav/drawer/SocialIconButtons';

const headerAndFooterHeight = '60rem';

function DrawerFooter() {
  return (
    <div
      className="NavDrawer_footer"
      sx={{
        display: 'flex',
        height: headerAndFooterHeight,
        flex: `0 0 ${headerAndFooterHeight}`,
        borderTop: (t) => `1rem solid ${t.colors.frameBorder}`,
      }}
    >
      <NavDrawerSocialIconButtons />
    </div>
  );
}

export default DrawerFooter;
