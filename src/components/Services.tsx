import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Services() {
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

  return (
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
  );
}