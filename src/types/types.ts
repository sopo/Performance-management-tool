import { Tables, TablesInsert } from "@/supabase/database.types";

export type Questions = Tables<'questions'>;
export type Answer = TablesInsert<'answers'>;
export type Profile = Tables<'profiles'>
export type InsertProfile = TablesInsert<'profiles'>
export type Peers = TablesInsert<"selected_peers">

