type ExtraLifeParticipant = {
  displayName: string;
  sumDonations?: number;
  fundraisingGoal?: number;
  streamIsLive?: boolean;
  avatarImageURL?: string;
  links?: {
    page?: string;
    stream?: string;
  };
  twitchUsername?: string;
  [key: string]: unknown;
};

const EXTRA_LIFE_API = 'https://www.extra-life.org/api';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function asParticipant(value: unknown): ExtraLifeParticipant | undefined {
  if (!isRecord(value) || typeof value.displayName !== 'string') {
    return;
  }

  const links = isRecord(value.links)
    ? {
        page: typeof value.links.page === 'string' ? value.links.page : undefined,
        stream:
          typeof value.links.stream === 'string' ? value.links.stream : undefined,
      }
    : undefined;

  return {
    ...value,
    displayName: value.displayName,
    sumDonations:
      typeof value.sumDonations === 'number' ? value.sumDonations : 0,
    fundraisingGoal:
      typeof value.fundraisingGoal === 'number'
        ? value.fundraisingGoal
        : undefined,
    streamIsLive: Boolean(value.streamIsLive),
    avatarImageURL:
      typeof value.avatarImageURL === 'string'
        ? value.avatarImageURL
        : undefined,
    links,
  };
}

export async function loadExtraLifeTeam(teamId: string) {
  const [teamRes, participantsRes] = await Promise.all([
    fetch(`${EXTRA_LIFE_API}/teams/${teamId}`),
    fetch(`${EXTRA_LIFE_API}/teams/${teamId}/participants`),
  ]);

  if (!teamRes.ok) {
    return {team: null, participants: [] as ExtraLifeParticipant[]};
  }

  const team = (await teamRes.json()) as Record<string, unknown>;
  const participantsRaw = participantsRes.ok
    ? ((await participantsRes.json()) as unknown[])
    : [];

  const participants = participantsRaw
    .flatMap((member) => {
      const parsed = asParticipant(member);
      return parsed ? [parsed] : [];
    })
    .map((member) => {
      const stream = member.links?.stream;
      const match = stream?.match(/channel=(.*)/);
      if (match?.[1]) {
        return {...member, twitchUsername: match[1]};
      }

      return member;
    })
    .sort((a, b) => {
      if (a.streamIsLive && !b.streamIsLive) return -1;
      if (b.streamIsLive && !a.streamIsLive) return 1;
      const donationsDiff = (b.sumDonations ?? 0) - (a.sumDonations ?? 0);
      if (donationsDiff === 0) {
        return a.displayName.localeCompare(b.displayName);
      }

      return donationsDiff;
    });

  return {
    team: {
      ...team,
      participants,
    },
    participants,
  };
}

export type {ExtraLifeParticipant};
