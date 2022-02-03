export default function previewFile(file) {
	let preview = document.getElementById('pic-profile');
	let file = document.querySelector('input[type=file]').files[0];
	let reader = new FileReader();

	reader.onloadend = function () {
		preview.src = reader.result;
	};

	if (file) {
		reader.readAsDataURL(file);
	} else {
		preview.src = '';
	}
}
