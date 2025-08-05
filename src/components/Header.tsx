import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Wrench" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">ПРОФКОМПЛЕКТАЦИЯ</h1>
              <p className="text-sm text-slate-600">Инжиниринговая компания</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors">Проекты</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О компании</a>
            <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
            <a href="#news" className="text-slate-700 hover:text-blue-600 transition-colors">Новости</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-slate-600">+7 (347) 555-67-77</p>
              <p className="text-xs text-slate-500">Генерал Толбухин, 5-1</p>
            </div>
            <Button>Заказать звонок</Button>
          </div>
        </div>
      </div>
    </header>
  );
}