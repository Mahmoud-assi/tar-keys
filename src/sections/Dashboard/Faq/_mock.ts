import type { LocaleType } from '@/types/custom'

export function getFAQByLocale(locale: LocaleType = 'ar') {
  return mock_data[locale]
}

const mock_data = {
  ar: [
    {
      question: 'كيف أشترك في منصة تركيز؟',
      answer: 'يمكنك الاشتراك عن طريق التواصل مع فريق الدعم أو التسجيل مباشرة عبر التطبيق.',
    },
    {
      question: 'هل توجد نسخة مجانية من المنصة؟',
      answer: 'نعم، هناك محتوى مجاني متاح لجميع المستخدمين لتجربة المنصة.',
    },
    {
      question: 'كيف أتابع تقدّم ابني الدراسي؟',
      answer: 'يمكن للولي متابعة التقدم من خلال التقارير الأسبوعية المتوفرة في التطبيق.',
    },
    {
      question: 'هل الدروس متاحة لجميع المستويات؟',
      answer: 'نعم، المنصة تقدم محتوى مناسب لجميع مستويات الطلاب.',
    },
    {
      question: 'كيف يمكنني إعادة تعيين كلمة المرور؟',
      answer:
        "يمكنك إعادة تعيين كلمة المرور من خلال صفحة تسجيل الدخول بالنقر على 'نسيت كلمة المرور'.",
    },
    {
      question: 'هل هناك دعم مباشر من المدرسين؟',
      answer: 'نعم، يمكن التواصل مع مشرفين تعليميين لتلقي المساعدة عند الحاجة.',
    },
    {
      question: 'هل يمكن تحميل الدروس؟',
      answer: 'نعم، بعض الدروس والملفات التعليمية متاحة للتحميل.',
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'يمكن الدفع عبر البطاقات البنكية أو التحويل الإلكتروني.',
    },
    {
      question: 'هل يمكن استخدام المنصة على الهاتف؟',
      answer: 'نعم، المنصة متوافقة مع جميع أجهزة الهواتف الذكية.',
    },
    {
      question: 'كيف أحصل على شهادة بعد الانتهاء من الكورس؟',
      answer: 'يمكنك الحصول على شهادة إلكترونية عند إكمال جميع الدروس والاختبارات.',
    },
  ],

  en: [
    {
      question: 'How can I subscribe to the Tarkez platform?',
      answer:
        'You can subscribe by contacting the support team or registering directly through the app.',
    },
    {
      question: 'Is there a free version of the platform?',
      answer: 'Yes, there is free content available for all users to try the platform.',
    },
    {
      question: "How can I track my child's progress?",
      answer: 'Parents can track progress through weekly reports available in the app.',
    },
    {
      question: 'Are the lessons suitable for all levels?',
      answer: 'Yes, the platform provides content suitable for all student levels.',
    },
    {
      question: 'How can I reset my password?',
      answer: "You can reset your password on the login page by clicking 'Forgot Password'.",
    },
    {
      question: 'Is there direct support from teachers?',
      answer: 'Yes, you can contact academic supervisors for assistance whenever needed.',
    },
    {
      question: 'Can I download the lessons?',
      answer: 'Yes, some lessons and educational files are available for download.',
    },
    {
      question: 'What payment methods are available?',
      answer: 'You can pay via credit/debit cards or bank transfer.',
    },
    {
      question: 'Can I use the platform on my phone?',
      answer: 'Yes, the platform is compatible with all smartphones.',
    },
    {
      question: 'How do I get a certificate after completing a course?',
      answer: 'You can receive an electronic certificate upon completing all lessons and quizzes.',
    },
  ],
}
