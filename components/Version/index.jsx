import Row from '../std/Row';
import Spacer from '../std/Spacer';
import std from '@/styles/std.module.css';
import timeConverter from './TimeConverter';

export default function Version(props) {
    const { version, date } = props;
    const formated_date = timeConverter(date);

    return (
        <div className={std.vm3} id={version}>
            <Row>
                <h1>v</h1>
                <h1>{version}</h1>
            </Row>

            <hr />
            <Spacer top="1" />

            <Row>
                <h5>{formated_date}</h5>
                <h5>Yakunin Design Team</h5>
            </Row>
        </div>
    );
}
