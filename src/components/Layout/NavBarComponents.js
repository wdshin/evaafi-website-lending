import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const splitArrayIntoChunksOfLen = (arr, len) => {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
};

const MenuItem = ({
  linkClassName,
  itemClassName,
  item,
  arrowClass,
  hasImage,
}) => {
  const hasChildren = item.child && item.child.length;
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <li className={classnames({ 'has-submenu': hasChildren, }, itemClassName,)}>
      <Link to={item.link} className={linkClassName} onClick={(e) => onClick(e)}>
        <ul className='p-0'>
          {hasImage ? (
            <>
              <div className="text-lg-center">
                <span className="d-none d-lg-block">
                  <img
                    src={item.img}
                    className="img-fluid rounded shadow-md"
                    alt=""
                  />
                </span>
                <span className="mt-lg-2 d-block">{item.title}</span>
              </div>
            </>
          ) : (
            <>
              {(item.isHeaderClass ? <li className="megamenu-head p-0"> <i className={item.icon}></i> {" "} {item.header} </li> : null)}
              {/* components */}
              {(item.isMenu ?
                <li>
                  <ul>
                    <li><i className={item.iconClass}></i>{item.subTitle}</li>
                  </ul>
                </li>
                : null)}
              {item.title}
              {item.extra && (
                <span className="badge bg-warning ms-2">{item.extra}</span>
              )}
            </>
          )}
        </ul>
      </Link>
      {hasChildren && (
        <>
          <span className={arrowClass}></span>
          <Menu menu={item.child} isOpen={isOpen} />
        </>
      )}
    </li>
  );
};

const Menu = ({ className, menu, isOpen }) => {
  const [groups, setGroups] = useState([]);
  const [isMegaMenu, setIsMegaMenu] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    var chunkSize = (menu.length <= 23 ? 5 : 13);
    const total = menu.length;
    var isM = total > 18;

    const hasI = (menu || []).find((m) => m.img);
    if (hasI) {
      setHasImage(true);
      chunkSize = 2;
      isM = total > 8;
    }

    if (isM) {
      setGroups(splitArrayIntoChunksOfLen(menu, chunkSize));
    }
    setIsMegaMenu(isM);
  }, [menu]);


  return (
    <ul className={classnames('submenu', { megamenu: isMegaMenu }, { open: isOpen }, className,)}
    >
      {isMegaMenu
        ? (groups || []).map((group, key) => (
          <li key={key}>
            <ul>
              {(group || []).map((g, gK) => {
                return (<MenuItem item={g} key={gK} linkClassName="" itemClassName="parent-menu-item" hasImage={hasImage} />);
              })}
            </ul>
          </li>
        ))
        : (menu || []).map((item, key) => (
          <MenuItem item={item} key={key} linkClassName="sub-menu-item" itemClassName="" isGrandChildren={true} arrowClass="submenu-arrow" />
        ))}
    </ul>
  );
};

export { Menu, MenuItem };
