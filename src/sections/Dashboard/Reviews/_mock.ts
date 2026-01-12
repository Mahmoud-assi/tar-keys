import type { LocaleType } from '@/types/custom'

export function getReviewsByLocale(locale: LocaleType = 'ar') {
  return reviewsData[locale]
}

const reviewsData = {
  ar: [
    {
      name: 'أحمد سعيد',
      role: 'طالب',
      comment: 'الشرح بسيط وواضح، والفيديوهات قصيرة وساعدتني أفهم بسرعة.',
      sx: { fill: '#3347C1' },
    },
    {
      name: 'سالم محمد',
      role: 'ولي أمر',
      comment: 'التطبيق ساعد ابني على تنظيم دراسته وتحسين مستواه بشكل ملحوظ.',
      sx: { fill: '#1BC471' },
    },
    {
      name: 'مها سلطان',
      role: 'طالبة',
      comment: 'أكثر شيء أعجبني هو متابعة التقدم، صرت أعرف مستواي بكل سهولة.',
      sx: { fill: '#DC243C' },
    },
    {
      name: 'توفيق الزعيم',
      role: 'طالب',
      comment: 'الاختبارات بعد كل درس خلّتني أتأكد إني فاهم الدرس فعلًا.',
      sx: { fill: '#3347C1' },
    },
    {
      name: 'ريم الهندي',
      role: 'ولية أمر',
      comment: 'أشعر بالاطمئنان لأن التطبيق يقدّم محتوى مفيد وتحت إشراف أساتذة.',
      sx: { fill: '#1BC471' },
    },
    {
      name: 'سليم كلاس',
      role: 'ولي أمر',
      comment: 'محتوى تعليمي مناسب وبأسلوب مفهوم، حتى بدون ضغط على الطالب.',
      sx: { fill: '#DC243C' },
    },
  ],
  en: [
    {
      name: 'Ahmed Saeed',
      role: 'Student',
      comment:
        'The explanations are simple and clear, the videos are short, and they helped me understand quickly.',
      sx: { fill: '#3347C1' },
    },
    {
      name: 'Salem Mohamed',
      role: 'Parent',
      comment:
        'The app helped my child organize his studies and improve his performance noticeably.',
      sx: { fill: '#1BC471' },
    },
    {
      name: 'Maha Sultan',
      role: 'Student',
      comment: 'What I liked most is the progress tracking; I can easily know my level.',
      sx: { fill: '#DC243C' },
    },
    {
      name: "Tawfiq Al-Za'em",
      role: 'Student',
      comment: 'The quizzes after each lesson helped me make sure I really understood the lesson.',
      sx: { fill: '#3347C1' },
    },
    {
      name: 'Reem Al-Hindi',
      role: 'Parent',
      comment:
        'I feel reassured because the app provides useful content under teacher supervision.',
      sx: { fill: '#1BC471' },
    },
    {
      name: 'Saleem Klass',
      role: 'Parent',
      comment:
        'Educational content is appropriate and presented in a clear way, even without pressuring the student.',
      sx: { fill: '#DC243C' },
    },
  ],
}
