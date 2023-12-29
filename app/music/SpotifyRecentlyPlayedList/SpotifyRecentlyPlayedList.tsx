import { intlFormatDistance } from "date-fns";

import { GlassCard } from "../../_components/GlassCard/GlassCard";
import getSpotifyRecentlyPlayed from "../../_server/spotify/getSpotifyRecentlyPlayed";

import styles from "./SpotifyRecentlyPlayedList.module.css";
import { Badge } from "../../_components/Badge/Badge";

interface Props {}

export default async function SpotifyRecentlyPlayedList({}: Props) {
  const { recentPlays } = await getSpotifyRecentlyPlayed();
  return (
    <GlassCard title="Recently Played">
      <div className={styles.recentlyPlayedList}>
        {recentPlays.slice(0, 6).map((rp) => {
          return (
            <Badge
              key={rp.track.name}
              label={`${rp.track.name} - ${rp.track.artists[0].name}`}
            />
          );
        })}
      </div>
    </GlassCard>
  );
}
