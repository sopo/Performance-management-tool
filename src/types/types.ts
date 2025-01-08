import { Tables, TablesInsert } from "@/supabase/database.types";

export type Questions = Tables<'questions'>;
export type Answer = TablesInsert<'answers'>;
export type Profile = Tables<'profiles'>
