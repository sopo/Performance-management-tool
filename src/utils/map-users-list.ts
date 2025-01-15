import { InsertProfile, PeerInsert, Profile } from "@/types/types";
import { User } from "@supabase/supabase-js";
export const mapUsersList = (users: User[]) => {
  return users?.map((user) => ({
    email: user?.email,
    key: user?.id ?? Math.random().toString(36).slice(2, 11),
    app_metadata: user?.app_metadata ?? {},
    user_metadata: user?.user_metadata ?? {},
    aud: user?.aud ?? "",
    fullName: user?.user_metadata.displayName,
  }));
};

export const mapPeerData = (
  user: Profile,
  selectedProfiles: InsertProfile[],
): PeerInsert[] => {
  return selectedProfiles.map((selectedProfile) => ({
    peer_display_name_en: selectedProfile.display_name_en,
    peer_display_name_ka: selectedProfile.display_name_ka,
    peer_id: selectedProfile.user_id,
    peer_position_en: selectedProfile.position_en,
    peer_position_ka: selectedProfile.position_ka,
    user_display_name_en: user.display_name_en,
    user_display_name_ka: user.display_name_ka,
    user_id: user.user_id,
    user_position_en: user.position_en,
    user_position_ka: user.position_ka,
  }));
};
