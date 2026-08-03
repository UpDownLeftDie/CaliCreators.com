type ExtraLifeParticipant = {
  displayName: string;
  sumDonations?: number;
  fundraisingGoal?: number;
  streamIsLive?: boolean;
  avatarImageURL?: string;
  links?: {
    page?: string;
    stream?: string;
    donate?: string;
  };
  twitchUsername?: string;
  isTeamCaptain?: boolean;
};

const EXTRA_LIFE_API = 'https://www.extra-life.org/api';
const channelFromStreamPattern = /channel=(?<channel>.*)/v;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function asParticipant(value: unknown): ExtraLifeParticipant | undefined {
  if (!isRecord(value) || typeof value.displayName !== 'string') {
    return;
  }

  const links = isRecord(value.links)
    ? {
        page:
          typeof value.links.page === 'string' ? value.links.page : undefined,
        stream:
          typeof value.links.stream === 'string'
            ? value.links.stream
            : undefined,
        donate:
          typeof value.links.donate === 'string'
            ? value.links.donate
            : undefined,
      }
    : undefined;

  return {
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
    isTeamCaptain: Boolean(value.isTeamCaptain),
    links,
  };
}

export async function loadExtraLifeTeam(teamId: string) {
  const [teamResponse, participantsResponse] = await Promise.all([
    fetch(`${EXTRA_LIFE_API}/teams/${teamId}`),
    fetch(`${EXTRA_LIFE_API}/teams/${teamId}/participants`),
  ]);

  if (!teamResponse.ok) {
    return {team: null, participants: [] as ExtraLifeParticipant[]};
  }

  const team = (await teamResponse.json()) as Record<string, unknown>;
  const participantsRaw = participantsResponse.ok
    ? ((await participantsResponse.json()) as unknown[])
    : [];

  const participants = participantsRaw
    .flatMap((member) => {
      const parsed = asParticipant(member);
      return parsed === undefined ? [] : [parsed];
    })
    .map((member) => {
      const stream = member.links?.stream;
      if (typeof stream !== 'string' || stream === '') {
        return member;
      }

      const match = channelFromStreamPattern.exec(stream);
      const channel = match?.groups?.channel;
      if (typeof channel !== 'string' || channel === '') {
        return member;
      }

      return {...member, twitchUsername: channel};
    })
    .toSorted((a, b) => {
      if (a.streamIsLive === true && b.streamIsLive !== true) {
        return -1;
      }

      if (b.streamIsLive === true && a.streamIsLive !== true) {
        return 1;
      }

      const donationsDiff = (b.sumDonations ?? 0) - (a.sumDonations ?? 0);
      if (donationsDiff === 0) {
        return a.displayName.localeCompare(b.displayName);
      }

      return donationsDiff;
    });

  return {
    team: {
      name: typeof team.name === 'string' ? team.name : undefined,
      fundraisingGoal:
        typeof team.fundraisingGoal === 'number'
          ? team.fundraisingGoal
          : undefined,
      sumDonations:
        typeof team.sumDonations === 'number' ? team.sumDonations : undefined,
      links: isRecord(team.links)
        ? {
            page:
              typeof team.links.page === 'string' ? team.links.page : undefined,
          }
        : undefined,
      participants,
    },
    participants,
  };
}

export type {ExtraLifeParticipant};
