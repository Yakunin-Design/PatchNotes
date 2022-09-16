export default function Spacer(props) {
    const { top, bottom, children } = props;

    const style = {
        marginTop: top ? `${top}rem` : '2rem',
        marginBottom: bottom ? `${bottom}rem` : '0rem',
    };

    return <div style={style}>{children}</div>;
}
