export default function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const weekday = days[a.getDay()];
    const time = weekday + ', ' + date + ' ' + month + ' ' + year;
    return time;
}