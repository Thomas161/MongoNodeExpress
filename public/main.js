function buttonToggle() {
    if (document.getElementsByName('name') === '' && document.getElementsByName('username') === '') {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}