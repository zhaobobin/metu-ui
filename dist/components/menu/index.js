import Menu from './menu';
import MenuItem from './menu-item';
import SubMenu from './sub-menu';
// 类型断言
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export { MenuItem, SubMenu };
export default TransMenu;
