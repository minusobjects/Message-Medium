export const formatDate = (dateArr) => {
	let ampm;
	let hour;
	if(dateArr[3] > 12){
		ampm = 'pm';
		hour = (dateArr[3] - 12);
	} else {
		ampm = 'am';
		hour = dateArr[3];
	}
	const months = ['none','Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
	let str = `${months[dateArr[0]]} ${dateArr[1]}, ${dateArr[2]}. ${hour}:${dateArr[4]} ${ampm}`;
	return str;
}

export const encodeDate = () => {
	let date = new Date();
	let month = (date.getMonth() + 1);
	let day = date.getDate();
	let year = date.getFullYear();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	return `${month},${day},${year},${hour},${minutes},${seconds}`;
}
