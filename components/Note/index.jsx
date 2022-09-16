import Spacer from '../std/Spacer';

export default function Note(props) {
    const { title, changes } = props;

    const note_changes = changes.map(change => (
        <Spacer top="1" key={change}>
            <p> - {change}</p>
        </Spacer>
    ));

    return (
        <div>
            <h3>{title}</h3>
            <Spacer top="0" bottom="2" />
            {note_changes}
        </div>
    );
}
