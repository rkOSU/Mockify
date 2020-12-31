export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumType = {
  id: string,
  image_uri: string;
  artist_headline: string;
  by: string;
  name: string;
}

export type Song = {
  id: string,
  image_uri: string,
  title: string,
  artist: string,
}