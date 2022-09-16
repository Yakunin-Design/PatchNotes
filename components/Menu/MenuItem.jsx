import Row from '@/components/std/Row';
import Spacer from '@/components/std/Spacer';
import styles from './menu.module.css';

export default function MenuItem({ date, version, toggleMenu }) {
    return (
        <a href={'#' + version} className={styles.menu_item} onClick={toggleMenu}>
            <Spacer top="3" bottom="3">
                <Row>
                    <h3>v{version}</h3>
                    <p>{date}</p>
                </Row>
            </Spacer>
            <hr />
        </a>
    );
}
