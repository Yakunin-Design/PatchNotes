import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.css';

import Container from '@/components/std/Container';

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <a href="https://yakunin.design">
                    <Image src="/logo.svg" width={19} height={25} alt="logo" />
                </a>
                <h3 className={styles.title}>Patch notes</h3>
            </Container>
        </header>
    );
}
