export function setDate() {
	// return moment(date).format('ddd MMM Do YYY');
	//Setting Date Style
	const dateStyle = {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};

	//instatianting an object of the Date Class
	const today = new Date();

	const date = today.toLocaleDateString('en-US', dateStyle);

	return date;
}
