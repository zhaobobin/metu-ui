import React, { FC, useState, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menu-item'
import Icon from '../icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Transition from '../transition'
library.add(fas)

export interface SubMenuProps {
  index?: string;
  title: string;
  showArrow?: boolean;
  className?: string;
  style?: React.CSSProperties; // 自定义样式
}

export const SubMenu: FC<SubMenuProps> = (props) => {

  const {
    index,
    title,
    showArrow,
    className,
    style,
    children
  } = props;

  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenSubmenus as Array<string>
  const isOpen = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false;
  const [ menuOpen, setOpen ] = useState(isOpen)

  const classes = classNames('metu-menu-submenu', className, {
    'actived': context.index.split('-')[0] === index,
    'menu-open': menuOpen
  });

  const handleCLick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? { onClick: handleCLick } : {}

  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
  } : {}

  const renderChildren = () => {
    const childrenElement = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps> // 类型断言
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}`})
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component.')
      }
    })
    if (context.mode === 'vertical') {
      return (
        <ul className="metu-submenu">
          {childrenElement}
        </ul>
      )
    } else {
      return (
        <Transition
          in={menuOpen}
          timeout={200}
          animation="zoom-in-top"
        >
          <ul className="metu-submenu">
            {childrenElement}
          </ul>
        </Transition>
      )
    }
    
  }

  const renderArrowIcon = () => {
    if(!showArrow) {
      return null;
    }
    if(context.mode === 'vertical') {
      return (
        <Icon
          className="arrow-icon"
          type="angle-down"
          theme="secondary"
          size={12}
        />
      )
    } else {
      return (
        <Icon
          className="arrow-icon"
          type="angle-down"
          theme={ menuOpen ? "primary" : "secondary" }
          size={12}
        />
      )
    }
  }

  return (
    <li className={classes} style={style} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        {renderArrowIcon()}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

SubMenu.defaultProps = {
  showArrow: true
}

export default SubMenu;