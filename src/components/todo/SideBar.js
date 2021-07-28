// import React from 'react';
// import { Link } from 'react-router-dom';
// import * as styles from './side-bar.module.scss';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
// import { useDispatch, useSelector } from 'react-redux';
// import { todoActions } from '../../actions';

// const SideBar = () => {
//   const dispatch = useDispatch();

//   const [popupMenu, setPopupMenu] = React.useState(false);
//   const toDo = async () => {
//     dispatch(todoActions.toDo());
//   }
//   const wallet_info = useSelector(state => state.wallet.data);

//   return (
//     <div className={styles.sideBarWrapper}>
//       <div className={styles.logoWrapper}>
//         <div className={styles.imgWrapper}>
//           <img src="img/logo-seal-outline-white.f9cad178 1.png" alt="logo" />
//         </div>
//         <div className={styles.textWrapper}>
//           <div className={styles.secret}>secret</div>
//           <div className={styles.pizza}>pizza</div>
//         </div>
//       </div>
//       <div className={styles.routeWrapper}>
//         <Link to='/'><div className={styles.routeItem}>Pizza</div></Link>
//         <Link to='/donate'><div className={styles.routeItem}>Donate</div></Link>
//         <Link to='/history'><div className={styles.routeItem}>History</div></Link>
//       </div>
//       <div className={styles.footWrapper}>
//         <button className={styles.walletButton} onClick={toDo}>{wallet_info ? "Connected" : "Keplr Wallet"}</button>
//       </div>
//       <div className={styles.menuWrapper} >
//         <button className={styles.menuButton} onClick={() => { setPopupMenu(!popupMenu) }}><MenuRoundedIcon/></button>
//       </div>
//       {(popupMenu) && (
//         <div className={styles.routeWrapperMobile}>
//           <Link to='/'><div className={styles.routeItemMobile} onClick={() => { setPopupMenu(!popupMenu) }}>Pizza</div></Link>
//           <Link to='/donate'><div className={styles.routeItemMobile} onClick={() => { setPopupMenu(!popupMenu) }}>Donate</div></Link>
//           <Link to='/history'><div className={styles.routeItemMobile} onClick={() => { setPopupMenu(!popupMenu) }}>History</div></Link>
//         </div>
//       )
//       }
//     </div>
//   );
// };

// export default SideBar;
