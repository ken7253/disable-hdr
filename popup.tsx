import { Storage } from "@plasmohq/storage";
import { useStorage } from "@plasmohq/storage/hook";

function IndexPopup() {
  const [extensionEnabled, setExtensionEnabled, { isLoading }] = useStorage({
    key: "extension-enabled",
    instance: new Storage({ area: "sync" }),
  });

  return (
    <div>
      <h1>Settings</h1>
      <label>
        Enable Extension
        <input
          type="checkbox"
          disabled={isLoading}
          checked={extensionEnabled}
          onChange={(e) => setExtensionEnabled(e.target.checked)}
        />
      </label>
    </div>
  );
}

export default IndexPopup;
