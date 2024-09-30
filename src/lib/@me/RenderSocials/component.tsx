import type {
  GithubUser,
  KoFiUser,
  StackOverFlowUser,
  socialsType,
} from "../../../api/devs/devs.types";

import "./style.scss";

export function RenderGithub({ username, href }: GithubUser) {
  return (
    <a href={href} className="socialLink" id="github">
      <img src="/github.svg" width={32} height={32} />
      <p>{username}</p>
    </a>
  );
}

export function RenderKoFi({ username, href }: KoFiUser) {
  return (
    <a href={href} className="socialLink ko-fi" id="ko-fi">
      <img src="/kofi.svg" width={32} height={32} />
      <p>{username}</p>
    </a>
  );
}

export function RenderStackOverFlow({
  username,
  href,
}: StackOverFlowUser): JSX.Element {
  return (
    <a href={href} className="socialLink" id="stack-overflow">
      <img src="/stack-overflow.svg" width={32} height={32} />
      <p>{username}</p>
    </a>
  );
}

export function RenderSocials({
  github,
  koFi,
  stackOverflow,
}: socialsType): JSX.Element {
  return (
    <div className="socials">
      {github ? <RenderGithub {...github} /> : null}
      {koFi ? <RenderKoFi {...koFi} /> : null}
      {stackOverflow ? <RenderStackOverFlow {...stackOverflow} /> : null}
    </div>
  );
}
