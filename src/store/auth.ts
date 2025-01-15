import { atom } from "jotai";
import { Session as SupabaseSession } from "@supabase/supabase-js";
import { Database } from "@/supabase/database.types";
export type Profile = Database["public"]["Tables"]["profiles"]["Update"];
export const UserAtom = atom<SupabaseSession | null>(null);
export const ProfileAtom = atom<Profile | null>(null);
