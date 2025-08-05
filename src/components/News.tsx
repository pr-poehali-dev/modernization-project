import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function News() {
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
  );
}