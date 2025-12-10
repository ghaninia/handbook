import Link from 'next/link'
import { notFound } from 'next/navigation'

const patterns: Record<string, PatternDetail> = {
  singleton: {
    title: 'الگوی سینگلتون',
    description: 'الگوی سینگلتون تضمین می‌کند که یک کلاس فقط یک نمونه داشته باشد و یک نقطه دسترسی سراسری به آن فراهم می‌کند.',
    category: 'سازنده',
    usage: [
      'زمانی که باید دقیقاً یک نمونه از یک کلاس وجود داشته باشد',
      'زمانی که نمونه واحد باید از طریق یک نقطه مشخص در دسترس باشد',
      'مثال: اتصال به پایگاه داده، تنظیمات برنامه',
    ],
    codeExample: `class Singleton {
  private static instance: Singleton;
  
  private constructor() {}
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}`,
    pros: [
      'تضمین یک نمونه واحد',
      'دسترسی سراسری',
      'Lazy initialization',
    ],
    cons: [
      'مشکل در تست‌نویسی',
      'نقض Single Responsibility',
      'پنهان کردن وابستگی‌ها',
    ],
  },
  factory: {
    title: 'الگوی فکتوری',
    description: 'الگوی فکتوری رابطی برای ساخت اشیاء در یک کلاس والد فراهم می‌کند و به زیرکلاس‌ها اجازه می‌دهد نوع اشیاء ساخته شده را تغییر دهند.',
    category: 'سازنده',
    usage: [
      'زمانی که نمی‌دانید چه نوع اشیایی باید بسازید',
      'زمانی که می‌خواهید کاربران بتوانند کتابخانه شما را گسترش دهند',
      'زمانی که می‌خواهید منابع سیستم را با استفاده مجدد از اشیاء موجود ذخیره کنید',
    ],
    codeExample: `interface Product {
  operation(): string;
}

abstract class Creator {
  abstract factoryMethod(): Product;
  
  someOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}`,
    pros: [
      'جداسازی ساخت از استفاده',
      'Single Responsibility',
      'Open/Closed Principle',
    ],
    cons: [
      'افزایش پیچیدگی کد',
      'نیاز به کلاس‌های زیاد',
    ],
  },
  strategy: {
    title: 'الگوی استراتژی',
    description: 'الگوی استراتژی خانواده‌ای از الگوریتم‌ها را تعریف می‌کند، هر کدام را کپسوله می‌کند و آن‌ها را قابل تعویض می‌سازد.',
    category: 'رفتاری',
    usage: [
      'زمانی که می‌خواهید از انواع مختلف یک الگوریتم در یک شیء استفاده کنید',
      'زمانی که الگوریتم‌های زیادی دارید که در نحوه اجرا متفاوتند',
      'زمانی که می‌خواهید در زمان اجرا بین الگوریتم‌ها جابجا شوید',
    ],
    codeExample: `interface Strategy {
  execute(a: number, b: number): number;
}

class AddStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Context {
  constructor(private strategy: Strategy) {}
  
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  
  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}`,
    pros: [
      'تعویض الگوریتم در زمان اجرا',
      'جداسازی پیاده‌سازی',
      'Open/Closed Principle',
    ],
    cons: [
      'پیچیدگی اضافی برای موارد ساده',
      'کلاینت باید از تفاوت‌ها آگاه باشد',
    ],
  },
  observer: {
    title: 'الگوی آبزرور',
    description: 'الگوی آبزرور مکانیزمی برای اطلاع‌رسانی تغییرات به اشیاء وابسته فراهم می‌کند.',
    category: 'رفتاری',
    usage: [
      'زمانی که تغییر یک شیء نیاز به تغییر اشیاء دیگر دارد',
      'زمانی که تعداد اشیاء وابسته مشخص نیست',
      'مثال: سیستم رویداد، اطلاع‌رسانی‌ها',
    ],
    codeExample: `interface Observer {
  update(message: string): void;
}

class Subject {
  private observers: Observer[] = [];
  
  attach(observer: Observer): void {
    this.observers.push(observer);
  }
  
  notify(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}`,
    pros: [
      'Open/Closed Principle',
      'رابطه زمان اجرا',
      'جداسازی ناشر و مشترکین',
    ],
    cons: [
      'اطلاع‌رسانی به ترتیب تصادفی',
      'ممکن است memory leak ایجاد شود',
    ],
  },
  decorator: {
    title: 'الگوی دکوراتور',
    description: 'الگوی دکوراتور قابلیت‌های جدید را به اشیاء به صورت پویا اضافه می‌کند.',
    category: 'ساختاری',
    usage: [
      'زمانی که می‌خواهید رفتار را در زمان اجرا اضافه کنید',
      'زمانی که ارث‌بری عملی نیست',
      'مثال: فشرده‌سازی، رمزنگاری داده‌ها',
    ],
    codeExample: `interface Component {
  operation(): string;
}

class Decorator implements Component {
  constructor(protected component: Component) {}
  
  operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecorator extends Decorator {
  operation(): string {
    return \`Decorated(\${super.operation()})\`;
  }
}`,
    pros: [
      'گسترش رفتار بدون ارث‌بری',
      'ترکیب چند دکوراتور',
      'Single Responsibility',
    ],
    cons: [
      'حذف wrapper از میانه stack سخت است',
      'ترتیب دکوراتورها مهم است',
    ],
  },
  adapter: {
    title: 'الگوی آداپتور',
    description: 'الگوی آداپتور رابط‌های ناسازگار را با یکدیگر سازگار می‌کند.',
    category: 'ساختاری',
    usage: [
      'زمانی که می‌خواهید از کلاس موجودی استفاده کنید که رابط آن با کد شما سازگار نیست',
      'زمانی که می‌خواهید کلاس‌های قابل استفاده مجدد بسازید',
      'مثال: یکپارچه‌سازی با API‌های خارجی',
    ],
    codeExample: `interface Target {
  request(): string;
}

class Adaptee {
  specificRequest(): string {
    return "Specific behavior";
  }
}

class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}
  
  request(): string {
    return this.adaptee.specificRequest();
  }
}`,
    pros: [
      'Single Responsibility',
      'Open/Closed Principle',
      'یکپارچه‌سازی آسان',
    ],
    cons: [
      'پیچیدگی اضافی',
      'گاهی ساده‌تر است Adaptee را تغییر دهید',
    ],
  },
  repository: {
    title: 'الگوی ریپازیتوری',
    description: 'الگوی ریپازیتوری لایه‌ای بین لایه منطق و لایه داده فراهم می‌کند.',
    category: 'معماری',
    usage: [
      'زمانی که می‌خواهید منطق دسترسی به داده را متمرکز کنید',
      'زمانی که می‌خواهید قابلیت تست را بهبود دهید',
      'زمانی که می‌خواهید منبع داده را به راحتی تغییر دهید',
    ],
    codeExample: `interface UserRepository {
  findById(id: string): User | null;
  save(user: User): void;
  delete(id: string): void;
}

class DatabaseUserRepository implements UserRepository {
  findById(id: string): User | null {
    // Database query
  }
  
  save(user: User): void {
    // Database insert/update
  }
  
  delete(id: string): void {
    // Database delete
  }
}`,
    pros: [
      'جداسازی منطق از داده',
      'تست‌پذیری بهتر',
      'قابلیت تعویض منبع داده',
    ],
    cons: [
      'لایه اضافی',
      'ممکن است بیش از حد پیچیده شود',
    ],
  },
  builder: {
    title: 'الگوی بیلدر',
    description: 'الگوی بیلدر ساخت اشیاء پیچیده را گام به گام انجام می‌دهد.',
    category: 'سازنده',
    usage: [
      'زمانی که ساختار شیء پیچیده است',
      'زمانی که می‌خواهید از constructor با پارامترهای زیاد جلوگیری کنید',
      'مثال: ساخت HTML، ساخت Query',
    ],
    codeExample: `class House {
  walls: number = 0;
  doors: number = 0;
  windows: number = 0;
}

class HouseBuilder {
  private house = new House();
  
  buildWalls(count: number): this {
    this.house.walls = count;
    return this;
  }
  
  buildDoors(count: number): this {
    this.house.doors = count;
    return this;
  }
  
  build(): House {
    return this.house;
  }
}

// Usage
const house = new HouseBuilder()
  .buildWalls(4)
  .buildDoors(2)
  .build();`,
    pros: [
      'ساخت گام به گام',
      'استفاده مجدد از کد ساخت',
      'کد خوانا با method chaining',
    ],
    cons: [
      'پیچیدگی اضافی برای اشیاء ساده',
      'کلاس‌های زیاد',
    ],
  },
  command: {
    title: 'الگوی کامند',
    description: 'الگوی کامند درخواست‌ها را به عنوان شیء کپسوله می‌کند.',
    category: 'رفتاری',
    usage: [
      'زمانی که می‌خواهید عملیات را صف‌بندی کنید',
      'زمانی که می‌خواهید Undo/Redo پیاده‌سازی کنید',
      'مثال: دستورات UI، تراکنش‌ها',
    ],
    codeExample: `interface Command {
  execute(): void;
  undo(): void;
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}
  
  execute(): void {
    this.light.turnOn();
  }
  
  undo(): void {
    this.light.turnOff();
  }
}

class RemoteControl {
  private history: Command[] = [];
  
  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }
  
  undo(): void {
    const command = this.history.pop();
    command?.undo();
  }
}`,
    pros: [
      'جداسازی فرستنده و گیرنده',
      'پیاده‌سازی Undo/Redo',
      'صف‌بندی عملیات',
    ],
    cons: [
      'افزایش تعداد کلاس‌ها',
      'پیچیدگی برای دستورات ساده',
    ],
  },
}

interface PatternDetail {
  title: string
  description: string
  category: string
  usage: string[]
  codeExample: string
  pros: string[]
  cons: string[]
}

export default function PatternPage({ params }: { params: { slug: string } }) {
  const pattern = patterns[params.slug]

  if (!pattern) {
    notFound()
  }

  return (
    <div className="container-custom py-12">
      <Link
        href="/design-patterns"
        className="inline-flex items-center text-primary-light dark:text-primary-dark mb-6 hover:underline"
      >
        → بازگشت به الگوهای طراحی
      </Link>

      <h1 className="text-4xl font-bold mb-4">{pattern.title}</h1>
      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm mb-6">
        {pattern.category}
      </span>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        {pattern.description}
      </p>

      <div className="space-y-8">
        <section className="card">
          <h2 className="text-2xl font-bold mb-4">موارد استفاده</h2>
          <ul className="space-y-2">
            {pattern.usage.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-light dark:text-primary-dark ml-2 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold mb-4">مثال کد</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed" dir="ltr">
            <code>{pattern.codeExample}</code>
          </pre>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="card bg-green-50 dark:bg-green-900/20">
            <h2 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">
              ✓ مزایا
            </h2>
            <ul className="space-y-2">
              {pattern.pros.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 ml-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="card bg-red-50 dark:bg-red-900/20">
            <h2 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">
              ✗ معایب
            </h2>
            <ul className="space-y-2">
              {pattern.cons.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 ml-2">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
