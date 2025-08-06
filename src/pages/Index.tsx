import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const advantages = [
    {
      icon: "Calendar",
      title: "Круглогодичное выращивание",
      description: "365 дней урожая независимо от погодных условий"
    },
    {
      icon: "Thermometer",
      title: "Термоизоляция контейнера",
      description: "Минимальные затраты на отопление благодаря изоляции"
    },
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "До 80% экономии энергии по сравнению с обычными теплицами"
    },
    {
      icon: "Target",
      title: "Контроль микроклимата",
      description: "Точное управление температурой, влажностью и освещением"
    },
    {
      icon: "TrendingUp",
      title: "Высокая урожайность",
      description: "В 3-5 раз больше урожая с квадратного метра"
    },
    {
      icon: "Shield",
      title: "Защита от вредителей",
      description: "Закрытая система исключает болезни и вредителей"
    }
  ];

  const products = [
    {
      name: "Клубника круглый год",
      yield: "до 50 кг/м²",
      season: "12 месяцев",
      icon: "🍓"
    },
    {
      name: "Зелень и салаты",
      yield: "до 30 кг/м²",
      season: "круглогодично",
      icon: "🥬"
    },
    {
      name: "Томаты черри",
      yield: "до 40 кг/м²", 
      season: "весь год",
      icon: "🍅"
    }
  ];

  const techFeatures = [
    "Морской контейнер 20 или 40 футов",
    "Многослойная термоизоляция",
    "LED-освещение полного спектра",
    "Система гидропоники",
    "Автоматический климат-контроль",
    "Мониторинг через мобильное приложение"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-growth-green rounded-lg flex items-center justify-center">
                <Icon name="Warehouse" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Теплица-Термос</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#technology" className="text-slate-600 hover:text-tech-blue transition-colors">Технология</a>
              <a href="#advantages" className="text-slate-600 hover:text-tech-blue transition-colors">Преимущества</a>
              <a href="#products" className="text-slate-600 hover:text-tech-blue transition-colors">Продукция</a>
              <a href="#contact" className="text-slate-600 hover:text-tech-blue transition-colors">Контакты</a>
            </div>
            <Button className="bg-tech-blue hover:bg-tech-blue/90">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                🚀 Инновационная агротехнология
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Теплица-Термос из 
                <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                  {" "}морского контейнера
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Революционное решение для круглогодичного выращивания клубники и зелени. 
                Автономная система с минимальными затратами энергии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-50 text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="h-64 bg-white/20 rounded-xl overflow-hidden">
                  <img 
                    src="/img/35592fce-1ef6-448e-a4cd-b5790168fa86.jpg" 
                    alt="Современная гидропонная теплица" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">365</div>
                    <div className="text-sm text-blue-200">дней в году</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">-80%</div>
                    <div className="text-sm text-blue-200">затрат энергии</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">×5</div>
                    <div className="text-sm text-blue-200">больше урожая</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-tech-blue/10 text-tech-blue">
              <Icon name="Cpu" size={16} className="mr-2" />
              Передовые технологии
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Как работает теплица-термос
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Уникальная технология превращает морской контейнер в высокотехнологичную 
              теплицу с идеальным микроклиматом для растений
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Конструкция и изоляция
              </h3>
              <ul className="space-y-4">
                {techFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-growth-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-gradient rounded-2xl p-8">
              <div className="h-64 rounded-xl overflow-hidden">
                <img 
                  src="/img/35231efd-f54e-4902-a5fb-fca6bed39b9f.jpg" 
                  alt="Свежая продукция из теплицы" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-tech-blue mb-2">+18°C</div>
                <div className="text-slate-600">Постоянная температура</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-growth-green mb-2">70%</div>
                <div className="text-slate-600">Влажность воздуха</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-tech-blue mb-2">16ч</div>
                <div className="text-slate-600">Световой день</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-growth-green mb-2">24/7</div>
                <div className="text-slate-600">Мониторинг</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-growth-green/10 text-growth-green">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Преимущества
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Почему теплица-термос лучше
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Современное решение, которое превосходит традиционные теплицы 
              по всем ключевым параметрам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-growth-green rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">
              <Icon name="Leaf" size={16} className="mr-2" />
              Что выращиваем
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Продукция круглый год
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Свежие овощи, ягоды и зелень 365 дней в году прямо из вашей теплицы-термос
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Урожайность:</span>
                      <Badge variant="secondary" className="bg-growth-green/10 text-growth-green">
                        {product.yield}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Сезон:</span>
                      <Badge variant="outline" className="border-tech-blue text-tech-blue">
                        {product.season}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-tech-blue/10 to-growth-green/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Рентабельность проекта
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-tech-blue mb-2">18 мес</div>
                  <div className="text-slate-600">Окупаемость</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-growth-green mb-2">300%</div>
                  <div className="text-slate-600">Рентабельность</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-tech-blue mb-2">₽2.5М</div>
                  <div className="text-slate-600">Годовая прибыль</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Начните свой агробизнес уже сегодня
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите персональную консультацию и расчет рентабельности для вашего проекта
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-50 text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (800) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              info@greenhouse-thermos.ru
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Офис в Москве</h3>
              <p className="text-blue-100">ул. Инновационная, 15</p>
            </div>
            <div>
              <Icon name="Clock" size={32} className="mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
              <p className="text-blue-100">Пн-Пт: 9:00-18:00</p>
            </div>
            <div>
              <Icon name="Headphones" size={32} className="mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-blue-100">Техническая поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-growth-green rounded-lg flex items-center justify-center">
                  <Icon name="Warehouse" size={20} className="text-white" />
                </div>
                <h3 className="text-white font-bold">Теплица-Термос</h3>
              </div>
              <p className="text-sm">
                Инновационные решения для современного сельского хозяйства
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm">
                <li>Теплицы-термос</li>
                <li>Система автоматизации</li>
                <li>Гидропоника</li>
                <li>LED-освещение</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Проектирование</li>
                <li>Монтаж и запуск</li>
                <li>Техническая поддержка</li>
                <li>Обучение персонала</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>+7 (800) 123-45-67</li>
                <li>info@greenhouse-thermos.ru</li>
                <li>Москва, ул. Инновационная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Теплица-Термос. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}