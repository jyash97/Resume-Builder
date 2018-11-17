const theme = {
	primaryColor: '#4e54c8',
	dangerColor: '#E3170A',
	white: '#FFFFFF',
	titleColor: '#040F0F',
	textColor: '#3F4045',
};

const getColor = (type = '', alpha) => {
	switch (type.toLowerCase()) {
		case 'primary':
			return `${theme.primaryColor}${alpha || ''}`;
		case 'danger':
			return `${theme.dangerColor}${alpha || ''}`;
		case 'text':
			return `${theme.textColor}${alpha || ''}`;
		case 'title':
			return `${theme.titleColor}${alpha || ''}`;
		default:
			return `${theme.white}${alpha || ''}`;
	}
};

export default getColor;
