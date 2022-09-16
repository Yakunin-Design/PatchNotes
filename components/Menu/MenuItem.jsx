import Row from '@/components/std/Row';
import Spacer from '@/components/std/Spacer';
import styles from './menu.module.css';

export default function MenuItem({ date, version, toggleMenu }) {
    return (
        <a href={'#' + version} className={styles.menu_item} onClick={toggleMenu}>
            <Spacer top="3" bottom="3">
                <Row>
                    <h3>{date}</h3>
                    <h3>{version}</h3>
                </Row>
            </Spacer>
            <hr />
        </a>
    );
}
