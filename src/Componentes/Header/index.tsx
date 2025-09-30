import Logo from "../Logo";

import HeaderFormFilters from "./HeaderFormFilters";
import HeaderActions from "./componentes/HeaderActions";
import HeaderLink from "./componentes/HeaderLink";
import Headerlistitem from "./componentes/HeaderListItem";
import Headerlist from "./componentes/Headerlist";

const Header = () => {
  return (
    <header>
      <Headerlist>
        <Headerlistitem>
          <Logo src="/logo.png" />
        </Headerlistitem>
        <Headerlistitem>
          <HeaderLink />
        </Headerlistitem>
        <Headerlistitem>
          <HeaderFormFilters />
        </Headerlistitem>
        <Headerlistitem>
          <HeaderActions />
        </Headerlistitem>
      </Headerlist>
    </header>
  );
};

export default Header;
