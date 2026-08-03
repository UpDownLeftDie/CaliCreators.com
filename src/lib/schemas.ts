export type Group = {
  city: string;
  name: string;
  imagePath: string;
  url: string;
  links: {
    twitter?: string;
    instagram?: string;
    discord?: string;
    twitch?: string;
  };
  charity?: {
    internalPage: boolean;
    url: string;
    imageKey: string;
  };
};

export type Groups = Record<string, Group>;

export type TwitchEvent = {
  chapter: {
    city: string;
  };
  url: string;
  start_date: string;
  title: string;
};

export type ExtraLifeScheduleItem = {
  streamer: string;
  twitter?: string;
  rawstarr?: string;
  timeStart: string;
  timeEnd: string;
};

export type ExtraLifeGroup = {
  url: string;
  id: string;
  hashtags: string[];
  schedule?: ExtraLifeScheduleItem[];
};

export type ExtraLifeSearch = {
  promote?: boolean;
  member?: string;
};
