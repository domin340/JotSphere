import type {
  GithubUser,
  KoFiUser,
  StackOverFlowUser,
  socialsType,
} from "../../../api/devs/devs.types";

import "./style.scss";

const size = 32;

type Social<T extends { href: string; username: string }> = Pick<
  T,
  "username" | "href"
>;

export function RenderGithub({ username, href }: Social<GithubUser>) {
  return (
    <a href={href} className="socialLink" id="github">
      <img src="/github.svg" width={size} height={size} />
      <p>{username}</p>
    </a>
  );
}

export function RenderKoFi({ username, href }: Social<KoFiUser>) {
  return (
    <a href={href} className="socialLink ko-fi" id="ko-fi">
      <img src="/kofi.svg" width={size} height={size} />
      <p>{username}</p>
    </a>
  );
}

export function RenderStackOverFlow({
  username,
  href,
}: Social<StackOverFlowUser>): JSX.Element {
  return (
    <a href={href} className="socialLink" id="stack-overflow">
      <img src="/stack-overflow.svg" width={size} height={size} />
      <p>{username}</p>
    </a>
  );
}

export function RenderSourceCode({
  title,
  href,
}: Pick<URL & { title: string }, "title" | "href">) {
  return (
    <a href={href} className="socialLink">
      <img src="/code.svg" alt="code" width={size} height={size} />
      <p>{title}</p>
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
      {github ? (
        <RenderGithub username={github.username} href={github.href} />
      ) : null}
      {koFi ? <RenderKoFi username={koFi.username} href={koFi.href} /> : null}
      {stackOverflow ? (
        <RenderStackOverFlow
          username={stackOverflow.username}
          href={stackOverflow.href}
        />
      ) : null}
    </div>
  );
}
