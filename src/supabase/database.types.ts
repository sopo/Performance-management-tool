export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      answers: {
        Row: {
          created_at: string
          id: number
          peer_id: string | null
          question_id: number | null
          score: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          peer_id?: string | null
          question_id?: number | null
          score?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          peer_id?: string | null
          question_id?: number | null
          score?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name_en: string | null
          display_name_ka: string | null
          id: number
          position_en: string | null
          position_ka: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          display_name_en?: string | null
          display_name_ka?: string | null
          id?: number
          position_en?: string | null
          position_ka?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          display_name_en?: string | null
          display_name_ka?: string | null
          id?: number
          position_en?: string | null
          position_ka?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          category_en: string | null
          category_ka: string | null
          id: number
          title_en: string | null
          title_ka: string | null
        }
        Insert: {
          category_en?: string | null
          category_ka?: string | null
          id?: number
          title_en?: string | null
          title_ka?: string | null
        }
        Update: {
          category_en?: string | null
          category_ka?: string | null
          id?: number
          title_en?: string | null
          title_ka?: string | null
        }
        Relationships: []
      }
      selected_peers: {
        Row: {
          id: number
          peer_display_name_en: string | null
          peer_display_name_ka: string | null
          peer_id: string | null
          peer_position_en: string | null
          peer_position_ka: string | null
          user_display_name_en: string | null
          user_display_name_ka: string | null
          user_id: string | null
          user_position_en: string | null
          user_position_ka: string | null
        }
        Insert: {
          id?: number
          peer_display_name_en?: string | null
          peer_display_name_ka?: string | null
          peer_id?: string | null
          peer_position_en?: string | null
          peer_position_ka?: string | null
          user_display_name_en?: string | null
          user_display_name_ka?: string | null
          user_id?: string | null
          user_position_en?: string | null
          user_position_ka?: string | null
        }
        Update: {
          id?: number
          peer_display_name_en?: string | null
          peer_display_name_ka?: string | null
          peer_id?: string | null
          peer_position_en?: string | null
          peer_position_ka?: string | null
          user_display_name_en?: string | null
          user_display_name_ka?: string | null
          user_id?: string | null
          user_position_en?: string | null
          user_position_ka?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
