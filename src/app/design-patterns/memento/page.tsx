'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MementoPage() {
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
        Memento Pattern
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Memento Pattern چیست؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            الگوی Memento—که به نام Token pattern نیز شناخته می‌شود—برای externalize کردن internal state یک object برای restoration بعدی، بدون violation کردن encapsulation استفاده می‌شود. این الگو بخشی از الگوهایی است که در Design Patterns توسط Gang of Four پوشش داده شده‌اند. این یک behavioral pattern است، چون به شما اجازه می‌دهد رفتارهای undo و replay را به یک object اضافه کنید.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            یک memento، internal state یک object را برای retrieve شدن بعدی نگه می‌دارد. مثل save point ها در یک video game، stack ها برای track کردن تغییرات، یا commit ها در source control به آن فکر کنید. نکته کلیدی که باید با الگوی Memento توجه کرد این است که آن internal state یک object را بدون violation کردن encapsulation capture می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            چه زمانی از Memento استفاده کنیم
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            این الگو برای موارد که object ها نیاز به restore شدن به یک state خاص دارند بهترین است. موارد برای این شامل:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li>Undo/redo در یک editor application</li>
            <li>Rolling back object ها به previous state هنگام cancel کردن action</li>
            <li>فراهم کردن access به internal state بدون breaking encapsulation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Structure الگوی Memento
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            سه class کلیدی برای الگوی memento وجود دارد—Originator، Caretaker، و Memento.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Memento class:</strong> state را نگه می‌دارد (state). این از طریق دو method قابل دسترس است—GetState() و SetState()</li>
            <li><strong>Originator class:</strong> state ای (state) که باید در memento ذخیره شود را دارد. می‌تواند memento ها را با CreateMemento() ایجاد کند. همچنین می‌تواند memento را با SetMemento(Memento m) set کند</li>
            <li><strong>Caretaker class:</strong> مسئول safekeeping است و روی memento کار انجام نمی‌دهد</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            این class ها به این شکل کار می‌کنند:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4 mt-4">
            <li>caretaker یک memento برای originator با CreateMemento() درخواست می‌کند</li>
            <li>originator یک memento جدید از طریق new Memento() ایجاد می‌کند</li>
            <li>originator state memento را با استفاده از SetState() تنظیم می‌کند</li>
            <li>اگر object نیاز به restore شدن به previous state داشته باشد، caretaker درخواست را به originator با استفاده از SetMemento(memento) pass می‌کند</li>
            <li>originator previous state را با استفاده از GetState() می‌گیرد</li>
          </ol>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            هدف نگه داشتن memento ها کوچک است. همچنین، caretaker فقط از طریق originator با memento سروکار دارد. caretaker هرگز مستقیماً memento را تغییر نمی‌دهد. caretaker فقط previous state ها را track می‌کند. originator creation و restoring memento ها را handle می‌کند.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Sample Code برای Memento Pattern
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            در اینجا نحوه implement شدن الگوی Memento با استفاده از C# آمده است:
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto" dir="ltr">
            <pre className="text-gray-800 dark:text-gray-200">{`using System;
using System.Collections.Generic;

// Originator: The object whose state needs to be saved
class Originator
{
    private string _state;

    public string State
    {
        // GetState()
        get { return _state; }
        // SetState()
        set
        {
            _state = value;
            Console.WriteLine("State set to: " + _state);
        }
    }

    // Creates a memento with the current state
    public Memento CreateMemento()
    {
        return new Memento(_state);
    }

    // Set the memento to a specific state
    public void SetMemento(Memento memento)
    {
        _state = memento.State;
        Console.WriteLine("State restored to: " + _state);
    }
}

// Memento: Stores the internal state of the Originator
class Memento
{
    public string State { get; }

    public Memento(string state)
    {
        State = state;
    }
}

// Caretaker: Manages and keeps track of multiple mementos
class Caretaker
{
    public List<Memento> Mementos { get; } = new List<Memento>();
}

class Program
{
    static void Main(string[] args)
    {
        // Create an originator
        Originator originator = new Originator();

        // Create a caretaker to manage mementos
        Caretaker caretaker = new Caretaker();

        // Set the initial state and save it in a memento
        originator.State = "State 1";
        caretaker.Mementos.Add(originator.CreateMemento());

        // Change the state and save it in another memento
        originator.State = "State 2";
        caretaker.Mementos.Add(originator.CreateMemento());

        // Restore the state from the first memento
        originator.SetMemento(caretaker.Mementos[0]);

        Console.ReadLine();
    }
}`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            مزایای Memento Pattern
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Encapsulation Preservation:</strong> internal state object بدون expose کردن جزئیات implementation save می‌شود</li>
            <li><strong>Undo/Redo Functionality:</strong> قابلیت undo و redo operation ها را فراهم می‌کند</li>
            <li><strong>Snapshot Capability:</strong> امکان گرفتن snapshot از object state در نقاط خاص زمان</li>
            <li><strong>State Management:</strong> مدیریت آسان multiple state ها و transition ها</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            نکات منفی Memento Pattern
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><strong>Memory Overhead:</strong> ذخیره multiple memento ها می‌تواند memory consumption قابل توجهی داشته باشد</li>
            <li><strong>Performance Cost:</strong> ایجاد و restore کردن memento ها می‌تواند expensive باشد، خاصه برای large object ها</li>
            <li><strong>Caretaker Complexity:</strong> managing memento history می‌تواند پیچیده شود</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            الگوهای مرتبط
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mr-4">
            <li><Link href="/design-patterns/command" className="text-blue-600 dark:text-blue-400 hover:underline">Command Pattern</Link> - اغلب با Memento برای undo functionality ترکیب می‌شود</li>
            <li><Link href="/design-patterns/state" className="text-blue-600 dark:text-blue-400 hover:underline">State Pattern</Link> - هر دو با object state management سروکار دارند</li>
            <li><Link href="/design-patterns/prototype" className="text-blue-600 dark:text-blue-400 hover:underline">Prototype Pattern</Link> - هر دو شامل copying object state هستند</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            منابع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 dark:text-blue-400 mr-4">
            <li>
              <a href="#" className="hover:underline">
                C# Design Patterns: Memento (Pluralsight)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                C# Design Patterns: Memento (GitHub)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  )
}
