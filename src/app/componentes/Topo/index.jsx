import Image from 'next/image'; 
import Link from 'next/link';
import Logo from '@/public/logo.png';
import styles from './Topo.module.css';

export default function Topo() {
    return (
    <header className={styles.topo}>
        <Image src={Logo} alt="A imagem de um sorvete" lang='A imagem de um sorvete' />
        <ul className={styles.menu}>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/sabores'}>Sabores</Link>
            </li>
            <li>    
                <Link href={'/sobre'}>Sobre</Link>
            </li>
        </ul>
    </header>
    );
}