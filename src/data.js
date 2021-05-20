import { v4 as uuidv4 } from 'uuid';
function chillHop() {
	return [
		{
			name: 'Coda',
			cover:
				'https://i.scdn.co/image/ab67616d0000b2737d019714ec21ce21d31df352',
			artist: 'Aarigod',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=13001',
			color: [ '#BDCE8D', '#474F3F' ],
			id: uuidv4(),
			active: true
		},
		{
			name: 'Cascade',
			cover:
				'https://i.scdn.co/image/ab67616d0000b273830bd373ee7338313033ec42',
			artist: 'Knowmadic',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=13092',
			color: [ '#DEA169', '#8DC9AB' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Trenches',
			cover:
				'https://i.scdn.co/image/ab67616d0000b273ff6a7a75706206f36433f3a0',
			artist: 'Philanthrope, Sleepy Fish',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=10247',
			color: [ '#7DBCE9', '#435E64' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Oasis',
			cover:
				'https://i.scdn.co/image/ab67616d0000b273ef41dca876323ddef2d211a3',
			artist: 'Makzo',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=11768',
			color: [ '#E99F8C', '#7582AF' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Toft',
			cover:
				'https://i.scdn.co/image/ab67616d0000b273ba9020bc90eae6174ae6e602',
			artist: 'Felty, Ezzy',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9312',
			color: [ '#5392C2', '#DEBD69' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Ochre',
			cover:
				'https://i.scdn.co/image/ab67616d0000b2736a54e20346d5b00a5bcbee1f',
			artist: 'Peter Bark',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=8039',
			color: [ '#403A36', '#EAC8AD' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Ocean Patio',
			artist: 'Philanthrope, Dayle',
			cover: 'https://i.scdn.co/image/ab67616d0000b27309168255f9b87df01d614080',
			id: uuidv4(),
			active: false,
			color: [ '#E8775C', '#3C3C3C' ],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=8036'
		},
		{
			name: 'Low Rider',
			artist: 'Evil Needle',
			cover: 'https://i.scdn.co/image/ab67616d0000b2739d280fd85c5f52b616a3a053',
			id: uuidv4(),
			active: false,
			color: [ '#E2B871', '#A18985' ],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=17090'
		}
	];
}

export default chillHop;
