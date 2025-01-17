let books = [
	{
		'image': '',
		'title': '',
		'author': '',
		'anotation': ''
	},
	{
		'image': 'https://img2.labirint.ru/rcimg/7dcfa54741723a30cbd1ea4836eacd14\
		/960x540/books33/324880/ph_001.jpg?1580289902',
		'title': 'Цветы для Элджернона',
		'author': 'Дэниел Киз',		
		'anotation': 'Тридцатитрехлетний Чарли Гордон - умственно отсталый. \
		При этом у него есть работа, друзья и непреодолимое желание учиться. \
		Он соглашается принять участие в опасном научном эксперименте и надежде стать умным...'
	},
	{
		'image': 'https://i1.rozetka.ua/goods/2140854/mahaon_9785389074354_images_2140854255.jpg',
		'title': 'Гарри Поттер и философский камень',
		'author': 'Джоан Роулинг',
		'anotation':'Это удивительная история мальчика-сироты, который узнал \
		о своей принадлежности к тайному волшебному миру,\
		который существует внутри реального мира. Гарри с рождения записан в школу чародейства Хогвартс,\
		куда в одиннадцатилетнем возрасте и отправляется.'
	},
	{
		'image': 'https://knijky.ru/sites/default/files/styles/264x390/public/\
		dzherom_d._selindzher_nad_propastyu_vo_rzhi.jpg?itok=gBsdtUuo',
		'title': 'Над пропастью во ржи',
		'author': 'Джером Д. Сэлинджер',
		'anotation': 'рассказывает читателю о шестнадцатилетнем парнишке по имени Холден Колфилд. \
		Человек с очень непростым характером, в очень непростом возрасте, он принимает окружающий мир по-своему. \
		Мечты и реальность, ребячество и серьезность — все это сконцентрировано в одном человеке.'
	}
];

window.addEventListener('unload', () => {
	localStorage.setItem('books', JSON.stringify(books));
});
