'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StatePage() {
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
        State Design Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوی State چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی طراحی State برای مدل‌سازی تغییرات در وضعیت یا حالت یک شیء استفاده می‌شود با تفویض قوانین چنین تغییراتی به اشیاء منفردی که هر کدام نمایانگر یک حالت ممکن هستند. شما می‌توانید الگوی State را به عنوان نمایانده یک Finite State Machine در نظر بگیرید، مانند این یکی برای پالیس‌های بیمه.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            در diagram بالا، که نمایانگر یک گراف است، هر دایره یک node و هر فلش اتصال‌دهنده یک edge نامیده می‌شود. الگوی State تمام node ها در یک diagram را به عنوان یک نوع واحد مدل می‌کند، و هر node فردی را به عنوان یک زیرنوع خاص. نوع پایه node متدهایی برای تمام edge های ممکن تعریف می‌کند؛ زیرکلاس‌ها متدهایی که نمایانگر انتقال‌های حالت مجاز از آن node هستند را پیاده‌سازی می‌کنند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نمونه Policy States
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              تصور کنید یک پالیس بیمه دارای حالت‌های مختلفی است: Unwritten، Open، Closed، Cancelled، و Void. هر انتقال بین این حالت‌ها قوانین تجاری خاص دارد.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            پیاده‌سازی الگوی State در C#
          </h2>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">تعریف Interface</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ابتدا interface IPolicyState را تعریف می‌کنیم که تمام عملیات مختلفی که می‌توانند برای تغییر حالت پالیس استفاده شوند را مشخص می‌کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public interface IPolicyState
{
    void Open(DateTime? writtenDate = null);
    void Void();
    void Update();
    void Close(DateTime closedDate);
    void Cancel();
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">کلاس Context (Policy)</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            کلاس Policy این interface را پیاده‌سازی می‌کند و تمام فراخوانی‌ها را به property State خود منتقل می‌کند:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public partial class Policy : IPolicyState
{
    private Policy()
    {
        _cancelledState = new CancelledState(this);
        _closedState = new ClosedState(this);
        _openState = new OpenState(this);
        _unwrittenState = new UnwrittenState(this);
        _voidState = new VoidState(this);
        State = _unwrittenState;
    }

    public Policy(string policyNumber) : this()
    {
        Number = policyNumber;
    }

    public int Id { get; set; }
    public string Number { get; set; }
    public DateTime? DateOpened { get; private set; }
    public DateTime? DateClosed { get; private set; }

    private readonly IPolicyStateCommands _cancelledState;
    private readonly IPolicyStateCommands _closedState;
    private readonly IPolicyStateCommands _openState;
    private readonly IPolicyStateCommands _unwrittenState;
    private readonly IPolicyStateCommands _voidState;
    public IPolicyStateCommands State { get; private set; }

    public void Cancel() => State.Cancel();
    public void Close(DateTime closedDate) => State.Close(closedDate);
    public void Open(DateTime? writtenDate = null) => State.Open(writtenDate);
    public void Update() => State.Update();
    public void Void() => State.Void();
}`}</pre>
          </div>

          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">پیاده‌سازی State خاص</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            از حالت Unwritten، تنها عملیات معتبری که می‌تواند بر روی پالیس انجام شود Open و Void هستند. این منطق در کلاس UnwrittenState نمایش داده می‌شود:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`public partial class Policy
{
    public class UnwrittenState : IPolicyStateCommands
    {
        private readonly Policy _policy;

        public UnwrittenState(Policy policy)
        {
            _policy = policy;
        }
        
        public void Cancel() => 
            throw new InvalidOperationException("Cannot cancel a policy before it's been Opened.");

        public void Close(DateTime closedDate) => 
            throw new InvalidOperationException("Cannot close a policy before it's been Opened.");

        public void Open(DateTime? writtenDate = null)
        {
            _policy.State = _policy._openState;
            _policy.DateOpened = writtenDate;
        }

        public void Update() => 
            throw new InvalidOperationException("Cannot update a policy before it's been Opened.");

        public void Void()
        {
            _policy.State = _policy._voidState;
        }

        public List<string> ListValidOperations()
        {
            return new List<string> { "Open", "Void" };
        }
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چه زمانی استفاده کنیم؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی State کاندید خوبی برای استفاده است زمانی که شیء شما مجموعه نسبتاً پیچیده‌ای از حالت‌های ممکن دارد، با قوانین تجاری مختلف زیادی برای اینکه چگونه انتقال‌های حالت رخ می‌دهند و چه کاری باید هنگام تغییر حالت انجام شود.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            اگر شیء به سادگی دارای یک property status است که می‌تواند هر زمان به هر وضعیتی با منطق خاص حداقل به‌روزرسانی شود، الگوی State پیچیدگی غیرضروری اضافه می‌کند. با این حال، برای اشیایی که مفاهیم دنیای واقعی را با work flow های پیچیده نمایندگی می‌کنند، الگوی State می‌تواند انتخاب خوبی باشد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایا
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>کاهش پیچیدگی شرطی:</strong> نیاز به دستورات if و switch در اشیایی که الزامات رفتاری متفاوتی منحصر به انتقال‌های حالت مختلف دارند را از بین می‌برد</li>
            <li><strong>قابلیت نمایش با FSM:</strong> اگر بتوانید حالت شیء را با یک diagram finite state machine نمایش دهید، تبدیل diagram به انواع و متدهای الگوی State نسبتاً آسان است</li>
            <li><strong>اصل Open/Closed:</strong> حالت‌های جدید بدون تغییر کد موجود قابل اضافه هستند</li>
            <li><strong>Single Responsibility:</strong> هر state کلاس مسئولیت مشخصی دارد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            معایب
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>کد زیاد:</strong> الگوی State نیاز به نوشتن کد زیادی دارد. بسته به تعداد متدهای انتقال حالت مختلف و تعداد حالت‌های ممکن یک شیء، می‌توان به سرعت دهها یا بیشتر متد مختلف داشت</li>
            <li><strong>پیچیدگی ریاضی:</strong> برای N حالت با M متد انتقال، تعداد کل متدهای ضروری (N+1)*M خواهد بود</li>
            <li><strong>Over-engineering:</strong> برای حالت‌های ساده ممکن است غیرضروری باشد</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/strategy" className="text-blue-600 dark:text-blue-400 hover:underline">Strategy Pattern</Link> - ساختار مشابه دارد اما هدف متفاوت</li>
            <li><Link href="/design-patterns/observer" className="text-blue-600 dark:text-blue-400 hover:underline">Observer Pattern</Link> - برای اطلاع‌رسانی تغییرات state</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="https://github.com/ardalis/DesignPatternsInCSharp" target="_blank" rel="noopener" className="hover:underline">
                Complete State Pattern Example with Unit Tests on GitHub
              </a>
            </li>
            <li>
              <a href="https://webgraphviz.com/" target="_blank" rel="noopener" className="hover:underline">
                WebGraphViz - Online State Diagram Generator
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}