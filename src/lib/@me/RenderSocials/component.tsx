import type {
  GithubUser,
  KoFiUser,
  StackOverFlowUser,
  socialsType,
} from "../../../api/devs/devs.types";

import "./style.scss";

export function RenderGithub(url: GithubUser): JSX.Element {
  return (
    <a href={url.href} className="socialLink" id="github">
      <img src="/github.svg" width={32} height={32} />
      <p>{url.username}</p>
    </a>
  );
}

export function RenderKoFi(url: KoFiUser): JSX.Element {
  return (
    <a href={url.href} className="socialLink ko-fi" id="ko-fi">
      <img src="/kofi.svg" width={32} height={32} />
      <p>{url.username}</p>
    </a>
  );
}

export function RenderStackOverFlow(url: StackOverFlowUser): JSX.Element {
  return (
    <a href={url.href} className="socialLink" id="stack-overflow">
      <img src="/stack-overflow.svg" width={32} height={32} />
      <p>{url.username}</p>
    </a>
  );
}

export function RenderSocials(socials: socialsType): JSX.Element {
  return (
    <div className="socials">
      {socials.github ? RenderGithub(socials.github) : null}
      {socials.koFi ? RenderKoFi(socials.koFi) : null}
      {socials.stackOverflow
        ? RenderStackOverFlow(socials.stackOverflow)
        : null}
    </div>
  );
}
