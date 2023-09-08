
function func() {
	return (new Date).getDate();
}

function year() {
    return (new Date).getFullYear();
}

function month() {
    return (new Date).getMonth();
}

let [year = year(), month = month(), day = func()] = arr;
