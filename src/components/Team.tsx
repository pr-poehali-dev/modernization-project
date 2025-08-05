import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Team() {
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

  return (
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
  );
}