import Link from 'next/link';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import styles from '@/styles/Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>DJ Events</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href='/account/login'>
              <a className='btn-secondary btn-icon'>
                <FaSignInAlt></FaSignInAlt>Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}