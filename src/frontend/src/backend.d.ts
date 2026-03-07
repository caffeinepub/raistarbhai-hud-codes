import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface HudLayout {
    code: string;
    name: string;
    description: string;
}
export interface backendInterface {
    getAllHudCodes(): Promise<Array<HudLayout>>;
    getHudCodeByName(name: string): Promise<HudLayout>;
}
