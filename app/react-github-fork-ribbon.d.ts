declare module "react-github-fork-ribbon" {
  type color = "red" | "orange" | "black" | "green";
  type position = "right" | "left" | "left-bottom" | "right-bottom";
  export interface GitHubForkRibbonProps {
    children: ReactNode;
    href: HTMLAnchorElement["href"];
    target?: HTMLAnchorElement["target"];
    position?: position;
    color?: color;
  }

  export default class GitHubForkRibbon extends React.Component<GitHubForkRibbonProps> {}
}
