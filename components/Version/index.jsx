import Row from '../std/Row';
import std from '@/styles/std.module.css';

export default function Version() {
    return (
        <div className={std.vm3}>
            <Row>
                <h1>v</h1>
                <h1>1.1</h1>
            </Row>
            <hr />
            <Row>
                <h5>Wed, 24 Aug 2022</h5>
                <h5>Yakunin Design Team</h5>
            </Row>
        </div>
    );
}
