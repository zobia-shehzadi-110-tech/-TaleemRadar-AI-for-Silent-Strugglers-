export type Language = 'en' | 'ur';

export interface Subject {
  id: string;
  name: string;
}

export interface WeakArea {
    topic: string;
    suggestion: string;
}

export interface StrugglingStudentReport {
    studentName: string;
    parentReport: string;
    weakAreas: WeakArea[];
}

export interface ClassAnalysis {
    classSummary: string;
    strugglingStudents: StrugglingStudentReport[];
}