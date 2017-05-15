import createMenu from './menu';
import '../sass/style.sass';
var menu = createMenu(['Главная','Блог', 'портфолио'], 'menu');
document.body.appendChild(menu);
