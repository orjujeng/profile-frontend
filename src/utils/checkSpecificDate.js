export default function checkSpecificDate(dateString) {
    const date = new Date(dateString.replace(/-/g, '/'));
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return days[date.getDay()] + ' ' + months[date.getMonth()]+ ' ' +date.getDate() + ' '+ date.getFullYear();
}
