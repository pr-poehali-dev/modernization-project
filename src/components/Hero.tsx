import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
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
  );
}