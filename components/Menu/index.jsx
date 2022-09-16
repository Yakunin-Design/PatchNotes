import Container from '../std/Container';
import MenuItem from './MenuItem';
import styles from './menu.module.css';

export default function Menu(props) {
    return (
        <div className={styles.menu}>
            <Container>
                <MenuItem
                    version="1.2"
                    date="Tue, 01 Sep 2022"
                    toggleMenu={props.toggleMenu}
                />
                <MenuItem
                    version="1.1"
                    date="Wed, 24 Aug 2022"
                    toggleMenu={props.toggleMenu}
                />
            </Container>
        </div>
    );
}
