import type { LocaleType } from '@/types/custom'

const reviewsData = {
  ar: [
    {
      name: 'أحمد سعيد',
      role: 'طالب',
      comment: 'الشرح بسيط وواضح، والفيديوهات قصيرة وساعدتني أفهم بسرعة.',
    },
    {
      name: 'سالم محمد',
      role: 'ولي أمر',
      comment: 'التطبيق ساعد ابني على تنظيم دراسته وتحسين مستواه بشكل ملحوظ.',
    },
    {
      name: 'مها سلطان',
      role: 'طالبة',
      comment: 'أكثر شيء أعجبني هو متابعة التقدم، صرت أعرف مستواي بكل سهولة.',
    },
    {
      name: 'توفيق الزعيم',
      role: 'طالب',
      comment: 'الاختبارات بعد كل درس خلّتني أتأكد إني فاهم الدرس فعلًا.',
    },
    {
      name: 'ريم الهندي',
      role: 'ولية أمر',
      comment: 'أشعر بالاطمئنان لأن التطبيق يقدّم محتوى مفيد وتحت إشراف أساتذة.',
    },
    {
      name: 'سليم كلاس',
      role: 'ولي أمر',
      comment: 'محتوى تعليمي مناسب وبأسلوب مفهوم، حتى بدون ضغط على الطالب.',
    },
  ],
  en: [
    {
      name: 'Ahmed Saeed',
      role: 'Student',
      comment:
        'The explanations are simple and clear, the videos are short, and they helped me understand quickly.',
    },
    {
      name: 'Salem Mohamed',
      role: 'Parent',
      comment:
        'The app helped my child organize his studies and improve his performance noticeably.',
    },
    {
      name: 'Maha Sultan',
      role: 'Student',
      comment: 'What I liked most is the progress tracking; I can easily know my level.',
    },
    {
      name: "Tawfiq Al-Za'em",
      role: 'Student',
      comment: 'The quizzes after each lesson helped me make sure I really understood the lesson.',
    },
    {
      name: 'Reem Al-Hindi',
      role: 'Parent',
      comment:
        'I feel reassured because the app provides useful content under teacher supervision.',
    },
    {
      name: 'Saleem Klass',
      role: 'Parent',
      comment:
        'Educational content is appropriate and presented in a clear way, even without pressuring the student.',
    },
  ],
}

export function getReviewsByLocale(locale: LocaleType = 'ar') {
  return reviewsData[locale]
}
