'use client'

import { motion } from 'framer-motion'

export default function LawsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 px-6 lg:px-12 max-w-4xl"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        قوانین مهندسی نرم‌افزار
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        اصول و قوانین عمومی که هر توسعه‌دهنده باید بداند
      </p>

      <div className="space-y-4">
        {laws.map((law) => (
          <div key={law.name} className="card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">{law.name}</h3>
              <span className="tag tag-blue">{law.nameEn}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{law.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const laws = [
  { name: 'قانون مور', nameEn: "Moore's Law", description: 'تعداد ترانزیستورها روی تراشه هر دو سال دو برابر می‌شود.' },
  { name: 'قانون بروکس', nameEn: "Brooks's Law", description: 'افزودن نیروی انسانی به پروژه دیرکرده، آن را دیرتر می‌کند.' },
  { name: 'قانون کانوی', nameEn: "Conway's Law", description: 'سازمان‌ها سیستم‌هایی طراحی می‌کنند که ساختار ارتباطی خودشان را منعکس می‌کند.' },
  { name: 'قانون پارتو', nameEn: 'Pareto Principle', description: '۸۰٪ اثرات از ۲۰٪ علل ناشی می‌شود.' },
  { name: 'قانون دمتر', nameEn: 'Law of Demeter', description: 'فقط با دوستان نزدیک خود صحبت کنید، نه با غریبه‌ها.' },
  { name: 'قانون هافستتر', nameEn: "Hofstadter's Law", description: 'همیشه بیشتر از انتظار طول می‌کشد، حتی اگر این قانون را در نظر بگیرید.' },
  { name: 'قانون لینوس', nameEn: "Linus's Law", description: 'با چشم‌های کافی، همه باگ‌ها سطحی هستند.' },
  { name: 'قانون پاسکال', nameEn: "Pascal's Law", description: 'ساده‌تر نوشتن طولانی است؛ وقت نداشتم کوتاه بنویسم.' },
  { name: 'قانون پوستل', nameEn: "Postel's Law", description: 'در آنچه می‌فرستید محتاط و در آنچه می‌پذیرید سخاوتمند باشید.' },
  { name: 'قانون گل', nameEn: 'Gall\'s Law', description: 'هر سیستم پیچیده کارآمد از سیستم ساده کارآمد تکامل یافته است.' },
  { name: 'اصل پیتر', nameEn: 'Peter Principle', description: 'افراد تا سطح بی‌کفایتی خود ارتقا می‌یابند.' },
  { name: 'قانون کرچهف', nameEn: "Kernighan's Law", description: 'دیباگ کردن دو برابر سخت‌تر از نوشتن کد است.' },
  { name: 'قانون زاوینسکی', nameEn: "Zawinski's Law", description: 'هر برنامه سعی می‌کند تا جایی گسترش یابد که ایمیل بخواند.' },
  { name: 'تیغ اوکام', nameEn: "Occam's Razor", description: 'ساده‌ترین توضیح معمولاً صحیح‌ترین است.' },
  { name: 'قانون گودهارت', nameEn: "Goodhart's Law", description: 'وقتی یک معیار هدف شود، دیگر معیار خوبی نیست.' },
  { name: 'قانون هایروم', nameEn: "Hyrum's Law", description: 'با تعداد کافی کاربران، همه رفتارهای قابل مشاهده توسط کسی استفاده می‌شود.' },
  { name: 'قانون نه نه', nameEn: 'Ninety-Ninety Rule', description: '۹۰٪ اول کد ۹۰٪ زمان را می‌گیرد، ۱۰٪ باقی هم ۹۰٪ دیگر.' },
  { name: 'قانون مورفی', nameEn: "Murphy's Law", description: 'هر چیزی که می‌تواند اشتباه شود، اشتباه خواهد شد.' },
]
