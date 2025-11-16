import { Language, Subject } from './types';

export const SUBJECTS_EN: Subject[] = [
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'pakistan_studies', name: 'Pakistan Studies' },
    { id: 'biology', name: 'Biology' },
    { id: 'english', name: 'English' },
    { id: 'urdu', name: 'Urdu' },
];

export const SUBJECTS_UR: Subject[] = [
    { id: 'mathematics', name: 'ریاضی' },
    { id: 'pakistan_studies', name: 'مطالعہ پاکستان' },
    { id: 'biology', name: 'حیاتیات' },
    { id: 'english', name: 'انگریزی' },
    { id: 'urdu', name: 'اردو' },
];

export const LOCALIZED_STRINGS: Record<Language, any> = {
  en: {
    appName: 'TaleemRadar',
    tagline: 'AI-Powered Insights for Teachers',
    languageName: 'Urdu',
    // Data Input Form
    formTitle: "Analyze 4-Week Student Performance",
    formSubtitle: "Export your data from Google Sheets as a CSV, then paste it below to generate parent reports.",
    subjectLabel: "Select Subject",
    dataInputLabel: "Paste Student Data Here (CSV Format)",
    dataInputPlaceholder: `Example:\nStudent Name,Week 1 Score,Week 2 Score,Week 3 Score,Week 4 Score\nAhmed Ali,8,7,5,6\nFatima Khan,9,9,10,8\nBilal Ahmed,5,4,6,5\n...`,
    analyzeButton: "Generate Reports",
    // Analysis Display
    loadingMessage: 'Analyzing data and generating reports...',
    analysisTitle: "Class Performance Analysis",
    classSummaryTitle: "Class Summary",
    strugglingStudentsTitle: "Parent Reports for Struggling Students",
    startOverButton: 'Analyze New Data',
    errorMessage: 'Oops! We couldn’t analyze the data. Please check the format and try again.',
    tryAgainButton: 'Try Again',
    copyReportButton: 'Copy Report',
    reportCopiedButton: 'Copied!',
    weakAreasTitle: 'Identified Weak Areas',
    topic: 'Topic',
    suggestion: 'Suggestion'
  },
  ur: {
    appName: 'تعلیم ریڈار',
    tagline: 'اساتذہ کے لیے AI سے چلنے والی بصیرت',
    languageName: 'English',
    // Data Input Form
    formTitle: "4 ہفتوں کی طالب علم کی کارکردگی کا تجزیہ کریں",
    formSubtitle: "گوگل شیٹس سے اپنا ڈیٹا CSV کے طور پر ایکسپورٹ کریں، پھر والدین کی رپورٹس بنانے کے لیے اسے نیچے پیسٹ کریں۔",
    subjectLabel: "مضمون منتخب کریں",
    dataInputLabel: "طالب علم کا ڈیٹا یہاں پیسٹ کریں (CSV فارمیٹ)",
    dataInputPlaceholder: `مثال:\nطالب علم کا نام,ہفتہ 1 سکور,ہفتہ 2 سکور,ہفتہ 3 سکور,ہفتہ 4 سکور\nاحمد علی,8,7,5,6\nفاطمہ خان,9,9,10,8\nبلال احمد,5,4,6,5\n...`,
    analyzeButton: "رپورٹس بنائیں",
    // Analysis Display
    loadingMessage: 'ڈیٹا کا تجزیہ کیا جا رہا ہے اور رپورٹس تیار کی جا رہی ہیں...',
    analysisTitle: "کلاس کی کارکردگی کا تجزیہ",
    classSummaryTitle: "کلاس کا خلاصہ",
    strugglingStudentsTitle: "جدوجہد کرنے والے طلباء کے لیے والدین کی رپورٹس",
    startOverButton: 'نیا ڈیٹا تجزیہ کریں',
    errorMessage: 'اوہ! ہم ڈیٹا کا تجزیہ نہیں کر سکے۔ براہ کرم فارمیٹ چیک کریں اور دوبارہ کوشش کریں۔',
    tryAgainButton: 'دوبارہ کوشش کریں',
    copyReportButton: 'رپورٹ کاپی کریں',
    reportCopiedButton: 'کاپی ہو گیا!',
    weakAreasTitle: 'شناخت شدہ کمزوریاں',
    topic: 'موضوع',
    suggestion: 'تجویز'
  }
};