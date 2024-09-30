import { useRef, useState } from "react";
import { Plugin } from "../api/devs/devs.types";
import PopupDialog from "../lib/@me/Dialog/component";
import TagElement from "../lib/@me/TagElement/component";
import { RenderSourceCode } from "../lib/@me/RenderLinks/component";
import { ExtensionList as plugins } from "../api/devs/_db/";

function Plugins() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [plugin, setPlugin] = useState<Plugin>();
  const shortenText = (text: string, cap: number) => {
    text = text.slice(0, cap);
    if (text.length > cap) text += "...";
    return text;
  };
  function handleModal(plugin: Plugin) {
    setPlugin(plugin);
    dialogRef.current?.showModal();
  }
  const RenderPlugin = ({
    plugin,
    isSummary,
  }: {
    plugin: Plugin;
    isSummary: boolean;
  }) => (
    <div className="plugin" onClick={() => handleModal(plugin)}>
      <h1>{plugin.name}</h1>
      <p>
        {!isSummary
          ? shortenText(plugin.description.toString(), 100)
          : plugin.description.toString()}
      </p>
      {!isSummary ? (
        <>
          <div className="tags">
            {plugin.tags.map((tag) => {
              if (tag) return <TagElement tag={tag} />;
            })}
          </div>
          {plugin.sourceCode ? (
            <RenderSourceCode
              title="Source Code"
              href={plugin.sourceCode.href}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
  return (
    <div className="PluginsContainer">
      {plugins.length > 0 ? (
        plugins.map((plugin) => (
          <RenderPlugin plugin={plugin} isSummary={true} />
        ))
      ) : (
        <p>No plugins avaible</p>
      )}
      <PopupDialog title="pluginDetails" dialogRef={dialogRef}>
        {plugin ? <RenderPlugin plugin={plugin} isSummary={false} /> : null}
      </PopupDialog>
    </div>
  );
}

export default Plugins;
