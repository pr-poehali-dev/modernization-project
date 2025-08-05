import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'Settings',
      title: 'Инженерные системы',
      description: 'Проектирование и монтаж систем отопления, вентиляции, кондиционирования'
    },
    {
      icon: 'Building',
      title: 'Промышленное строительство',
      description: 'Строительство производственных комплексов и промышленных объектов'
    },
    {
      icon: 'HardHat',
      title: 'Техническое обслуживание',
      description: 'Регулярное обслуживание и ремонт промышленного оборудования'
    },
    {
      icon: 'Zap',
      title: 'Электромонтажные работы',
      description: 'Проектирование и монтаж электрических систем любой сложности'
    }
  ];

  const experts = [
    {
      name: 'Александр Петров',
      position: 'Главный инженер',
      experience: '15 лет',
      specialization: 'Промышленные системы',
      description: 'Эксперт по проектированию сложных инженерных систем для крупных производств'
    },
    {
      name: 'Мария Сидорова',
      position: 'Ведущий проектировщик',
      experience: '12 лет',
      specialization: 'HVAC системы',
      description: 'Специалист по системам вентиляции и кондиционирования'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Технический директор',
      experience: '18 лет',
      specialization: 'Автоматизация',
      description: 'Руководит внедрением систем автоматизации производственных процессов'
    }
  ];

  const projects = [
    {
      title: 'Модернизация производственного комплекса',
      category: 'Промышленность',
      description: 'Полная модернизация систем энергоснабжения крупного машиностроительного завода',
      status: 'Завершен'
    },
    {
      title: 'Строительство логистического центра',
      category: 'Логистика',
      description: 'Проектирование и строительство современного складского комплекса площадью 50,000 м²',
      status: 'В процессе'
    },
    {
      title: 'Система очистки воды',
      category: 'Экология',
      description: 'Внедрение инновационной системы водоочистки для химического предприятия',
      status: 'Планируется'
    }
  ];

  const news = [
    {
      date: '15 августа 2024',
      title: 'Завершен крупный проект по модернизации завода',
      description: 'Успешно завершили модернизацию энергосистем машиностроительного предприятия'
    },
    {
      date: '8 августа 2024',
      title: 'Получена лицензия на новые виды работ',
      description: 'Компания расширила список лицензированных видов деятельности'
    },
    {
      date: '1 августа 2024',
      title: 'Участие в международной выставке',
      description: 'Представили инновационные решения на выставке промышленных технологий'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/822fe0c8-4c1d-4bf1-83da-5665c60b68a1.jpg"
            alt="Современное производство"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600 text-white">Профессиональные решения</Badge>
                <h2 className="text-5xl font-bold leading-tight">
                  Инженерные решения нового поколения
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Создаем и внедряем инновационные инженерные системы для промышленных предприятий. 
                  Наш опыт — ваш успех в достижении технологического превосходства.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Скачать презентацию
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">200+</div>
                  <div className="text-sm text-slate-400">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">15</div>
                  <div className="text-sm text-slate-400">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-slate-400">Специалистов</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-75"></div>
                <Card className="relative bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold">Почему выбирают нас?</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Icon name="CheckCircle" className="text-green-400" size={20} />
                          <span>Комплексный подход к решению задач</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="CheckCircle" className="text-green-400" size={20} />
                          <span>Современные технологии и оборудование</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="CheckCircle" className="text-green-400" size={20} />
                          <span>Команда сертифицированных экспертов</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="CheckCircle" className="text-green-400" size={20} />
                          <span>Гарантия качества и сроков</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Виды услуг</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Предоставляем полный спектр инженерных услуг для промышленных предприятий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                    <Icon name={service.icon} className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="experts" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Эксперты и специалисты</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Команда профессионалов с многолетним опытом в области инжиниринга
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{expert.name}</h3>
                      <p className="text-blue-600 font-medium">{expert.position}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Опыт работы:</span>
                      <Badge variant="secondary">{expert.experience}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Специализация:</span>
                      <Badge className="bg-blue-100 text-blue-800">{expert.specialization}</Badge>
                    </div>
                  </div>
                  <p className="text-slate-600">{expert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Проекты</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Примеры успешно реализованных проектов в различных отраслях
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800">{project.category}</Badge>
                    <Badge variant={project.status === 'Завершен' ? 'default' : project.status === 'В процессе' ? 'secondary' : 'outline'}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">15 лет в инжиниринге</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Компания была создана группой ведущих инженеров с целью предоставления комплексных 
                  решений для промышленных предприятий. За годы работы мы зарекомендовали себя как 
                  надежный партнер в области инженерных систем.
                </p>
                <p>
                  Наша миссия — создание эффективных технических решений, которые помогают нашим 
                  клиентам достигать новых высот в производстве и повышать конкурентоспособность.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-slate-600">Выполненных проектов</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-slate-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/63107137-dc3d-4ec5-bf4a-7d1883025ba2.jpg"
                alt="Команда специалистов"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl">
                <Icon name="Award" size={32} className="mb-2" />
                <div className="font-semibold">Сертифицированная команда</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Актуальное</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Новости</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Следите за последними событиями и достижениями нашей компании
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-sm text-blue-600 font-medium mb-2">{item.date}</div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-blue-600">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-slate-300 mb-8">
                Готовы обсудить ваш проект и предложить оптимальные решения
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-slate-300">+7 (347) 555-67-77</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">info@profkomplektacia.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-slate-300">ул. Генерал Толбухин, 5-1</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Оставить заявку</CardTitle>
                  <CardDescription className="text-slate-400">
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}