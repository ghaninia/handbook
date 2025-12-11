'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ObjectMotherPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <div className="mb-6">
        <Link href="/design-patterns" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
          ← Back to Design Patterns
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Object Mother Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Object Mother Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Object Mother توسط Martin Fowler به عنوان نام جذابی برای factory که standard fixture هایی را که می‌توانند در چندین test استفاده شوند، return می‌کند، توصیف شد. نام خودش در یک project Thoughtworks ابداع شد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Object mother نوعی class است که در testing برای کمک به ایجاد example object هایی که برای testing استفاده می‌کنید، استفاده می‌شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مشکل Test Fixture ها
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            وقتی test ها را در یک system با اندازه معقول می‌نویسید، متوجه می‌شوید که باید مقدار زیادی example data ایجاد کنید. اگر بخواهم sick pay calculation روی یک employee تست کنم، به یک employee نیاز دارم. اما این فقط یک simple object نیست—به marital status employee، تعداد dependent ها، مقداری employment و payroll history نیاز خواهم داشت. احتمالاً این می‌تواند object های زیادی برای ایجاد باشد. این set data به طور کلی به عنوان test fixture شناخته می‌شود.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            اولین حرکت ایجاد fixture در setup method یک xunit test است—به این شکل می‌تواند در چندین test reuse شود. اما مشکل این کار این است که اغلب به data مشابه در چندین test class نیاز دارید. در این نقطه منطقی است که یک factory object داشته باشید که بتواند standard fixture ها را return کند. شاید 'John'، employee ای که همین هفته گذشته استخدام شده؛ 'Heather' employee ای که یک دهه در اطراف بوده است.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Object Mother فقط یک نام جذاب برای چنین factory ای است. این نام در یک project Thoughtworks در قرن گذشته ابداع شد و به اندازه کافی جذاب است که stuck شده است.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`// Without Object Mother - duplicated setup in every test
[Test]
public void ShouldApplyDiscount_ForPremiumCustomer()
{
    var customer = new Customer
    {
        Id = 1,
        Name = "John Doe",
        Email = "john@example.com",
        Type = CustomerType.Premium,
        JoinDate = DateTime.Now.AddYears(-2),
        Address = new Address
        {
            Street = "123 Main St",
            City = "New York",
            PostalCode = "10001"
        }
    };
    
    // ... test code
}

// Same setup repeated in dozens of tests!`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Canned Objects و Personas
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Canned object هایی که Object Mother تولید می‌کند برای team آشنا می‌شوند، اغلب حتی discussion ها با user ها را invade می‌کنند. به این شکل آنها شبیه notion personas هستند—اگرچه آنها همیشه people نیستند. آنها می‌توانند insurance policy ها، supply contract ها، هر data ای که test framework نیاز دارد باشند. استفاده از data مشابه در چندین test به people کمک می‌کند که با example هایی که استفاده می‌کنید آشنا باشند.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این canned object ها اغلب برای یک test خاص درست نیستند، اما اغلب می‌توانند با مقداری setup اضافی درست شوند. "بیایید John را بگیریم و او را دو ماه پیش sick کنیم." گاهی اوقات نیاز خواهید داشت یک canned object جدید به mother اضافه کنید، اما سعی کنید اگر می‌توانید یکی از موجودها را tweak کنید—به این شکل reader test اگر با canned object های موجود آشنا باشد سریع‌تر درک خواهد کرد.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            معمولاً چندین نوع object خواهید داشت که نیاز به birth دارید، پس دستی است که mother های متفاوت برای class های مختلف داشته باشید: مثلاً CustomerMother، ProductMother، و غیره.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی Object Mother
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Object Mother ها ایرادات خود را دارند. به خصوص heavy coupling وجود دارد به این معنا که test های زیادی به exact data در mother ها وابسته خواهند بود. در نتیجه tricky است اگر بخواهید آن standard data را به هر دلیلی تغییر دهید. تغییرات در class ها همچنین منجر به نیاز migrate کردن test ها خواهد شد—اگرچه این در هر حال issue خواهد بود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Structure و Factory Method Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Object Mother بر الگوی Factory Method Pattern بنا شده است. الگوی Object Mother method هایی برای customize کردن creation object ها، update کردن object ها در طول testing، و enable کردن object deletion از data storage اضافه می‌کند. Object creation در Object Mother class handle می‌شود، نه در داخل test ها.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            برای مثال، یک Object Mother class برای user ها—مانند در devBetter—می‌تواند چیزی شبیه این باشد:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`TestUsers
+CreateRegularUser()
+CreateMemberUser()
+CreateAlumniUser()
+CreateAdminUser()`}</pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Downfall الگوی Object Mother این است که class می‌تواند در طول زمان با repetitive code bloated شود. DRY مهم است که در نظر داشته باشید، چون ممکن است بخش‌هایی از object creation بین انواع مختلف object ها با همان mother تکرار شود.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مثال پیاده‌سازی
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public static class EmployeeMother
{
    public static Employee CreateJohn()
    {
        return new Employee
        {
            Name = "John Doe",
            MaritalStatus = MaritalStatus.Single,
            Dependents = 0,
            HireDate = DateTime.Now.AddDays(-7),
            Salary = 50000
        };
    }
    
    public static Employee CreateHeather()
    {
        return new Employee
        {
            Name = "Heather Smith",
            MaritalStatus = MaritalStatus.Married,
            Dependents = 2,
            HireDate = DateTime.Now.AddYears(-10),
            Salary = 75000
        };
    }
    
    public static Employee CreateSickEmployee()
    {
        var employee = CreateJohn();
        employee.SickDays = 15;
        employee.LastSickDate = DateTime.Now.AddMonths(-2);
        return employee;
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            استفاده در Test ها
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`[Test]
public void ShouldCalculateSickPay_ForNewEmployee()
{
    var employee = EmployeeMother.CreateJohn();
    var sickPay = _calculator.CalculateSickPay(employee);
    
    Assert.That(sickPay, Is.EqualTo(0));
}

[Test]
public void ShouldCalculateSickPay_ForLongTermEmployee()
{
    var employee = EmployeeMother.CreateHeather();
    var sickPay = _calculator.CalculateSickPay(employee);
    
    Assert.That(sickPay, Is.GreaterThan(0));
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای Object Mother Pattern
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Reusability:</strong> standard fixture ها در چندین test قابل استفاده هستند</li>
            <li><strong>Maintainability:</strong> تغییرات object structure فقط در یک جا نیاز است</li>
            <li><strong>Readability:</strong> test ها با نام‌های meaningful برای object ها خواناتر هستند</li>
            <li><strong>Consistency:</strong> همه test ها از همان standard data استفاده می‌کنند</li>
            <li><strong>Team Communication:</strong> canned object ها برای team آشنا می‌شوند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/builder" className="text-blue-600 dark:text-blue-400 hover:underline">Builder Pattern</Link> - جایگزین Object Mother Pattern</li>
            <li><Link href="/design-patterns/factory-method" className="text-blue-600 dark:text-blue-400 hover:underline">Factory Method Pattern</Link> - Object Mother بر آن بنا شده است</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                Object Mother - Martin Fowler
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Object Mother - C2.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                On-Demand Webinar: Exploring Design Patterns for Testing
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
