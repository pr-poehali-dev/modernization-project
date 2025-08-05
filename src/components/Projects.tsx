import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Projects() {
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

  return (
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
  );
}