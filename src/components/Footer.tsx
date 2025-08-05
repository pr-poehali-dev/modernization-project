import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Wrench" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">ПРОФКОМПЛЕКТАЦИЯ</h3>
                <p className="text-sm text-slate-400">Инжиниринговая компания</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Профессиональные инженерные решения для промышленных предприятий. 
              Качество, надежность, инновации.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Icon name="Phone" size={20} />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Icon name="Mail" size={20} />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Icon name="MapPin" size={20} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Инженерные системы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Промышленное строительство</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Техническое обслуживание</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Электромонтажные работы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Проекты</a></li>
              <li><a href="#experts" className="hover:text-white transition-colors">Команда</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ПРОФКОМПЛЕКТАЦИЯ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}