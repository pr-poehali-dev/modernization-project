import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function About() {
  return (
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
  );
}