import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+73475556777';
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
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
          
          <nav className="hidden md:flex space-x-2">
            <Button variant="ghost" onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
              Главная
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
              Услуги
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
              Проекты
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
              О компании
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contacts')} className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
              Контакты
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('news')} className="text-slate-700 hover:text-blue-600 hover:bg-blue-50">
              Новости
            </Button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-slate-600">+7 (347) 555-67-77</p>
              <p className="text-xs text-slate-500">Генерал Толбухин, 5-1</p>
            </div>
            <Button onClick={handleCallClick} className="hidden sm:flex">
              <Icon name="Phone" className="mr-2" size={16} />
              Заказать звонок
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 pb-6 border-b">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon name="Wrench" className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">ПРОФКОМПЛЕКТАЦИЯ</h2>
                      <p className="text-sm text-slate-600">Инжиниринговая компания</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <button onClick={() => scrollToSection('home')} className="text-left text-lg text-slate-700 hover:text-blue-600 transition-colors py-2">
                      <Icon name="Home" className="inline mr-3" size={20} />
                      Главная
                    </button>
                    <button onClick={() => scrollToSection('services')} className="text-left text-lg text-slate-700 hover:text-blue-600 transition-colors py-2">
                      <Icon name="Settings" className="inline mr-3" size={20} />
                      Услуги
                    </button>
                    <button onClick={() => scrollToSection('projects')} className="text-left text-lg text-slate-700 hover:text-blue-600 transition-colors py-2">
                      <Icon name="FolderOpen" className="inline mr-3" size={20} />
                      Проекты
                    </button>
                    <button onClick={() => scrollToSection('about')} className="text-left text-lg text-slate-700 hover:text-blue-600 transition-colors py-2">
                      <Icon name="Building" className="inline mr-3" size={20} />
                      О компании
                    </button>
                    <button onClick={() => scrollToSection('contacts')} className="text-left text-lg text-slate-700 hover:text-blue-600 transition-colors py-2">
                      <Icon name="Phone" className="inline mr-3" size={20} />
                      Контакты
                    </button>
                    <button onClick={() => scrollToSection('news')} className="text-left text-lg text-slate-700 hover:text-blue-600 transition-colors py-2">
                      <Icon name="Newspaper" className="inline mr-3" size={20} />
                      Новости
                    </button>
                  </nav>

                  <div className="pt-6 border-t">
                    <div className="mb-4">
                      <p className="text-sm font-medium text-slate-900">Контакты</p>
                      <p className="text-sm text-slate-600">+7 (347) 555-67-77</p>
                      <p className="text-xs text-slate-500">Генерал Толбухин, 5-1</p>
                    </div>
                    <Button onClick={handleCallClick} className="w-full">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Заказать звонок
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}