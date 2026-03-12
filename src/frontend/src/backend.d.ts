import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StudentRegistration {
    studentName: string;
    subject: string;
    mobile: string;
    registeredAt: bigint;
    className: string;
    parentName: string;
}
export interface PdfChapter {
    subject: string;
    pdfUrl: string;
    className: string;
    chapterName: string;
}
export interface HudLayout {
    code: string;
    name: string;
    description: string;
}
export interface Notice {
    id: bigint;
    text: string;
    createdAt: bigint;
}
export interface backendInterface {
    addPdfChapter(subject: string, chapterName: string, pdfUrl: string, className: string): Promise<void>;
    deletePdfChapter(chapterId: bigint): Promise<boolean>;
    getAdminLastSeen(): Promise<bigint>;
    getAllChapters(): Promise<Array<PdfChapter>>;
    getAllHudCodes(): Promise<Array<HudLayout>>;
    getAllRegistrations(): Promise<[Array<StudentRegistration>, bigint]>;
    getChaptersBySubject(subject: string): Promise<Array<PdfChapter>>;
    getChaptersBySubjectAndClass(subject: string, className: string): Promise<Array<PdfChapter>>;
    getHudCodeByName(name: string): Promise<HudLayout>;
    registerStudent(studentName: string, className: string, subject: string, mobile: string, parentName: string): Promise<void>;
    setAdminLastSeen(): Promise<void>;
    addNotice(text: string): Promise<bigint>;
    deleteNotice(id: bigint): Promise<boolean>;
    getNotices(): Promise<Array<Notice>>;
}
