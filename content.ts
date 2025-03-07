import { Storage } from "@plasmohq/storage";

export {};

const storage = new Storage({ area: "sync" });

const setup = () => {
  const style = document.createElement("style");
  style.innerText = "video { filter: brightness(1) !important; }";
  style.className = "__EXTENSION_STYLE_HDR_DISABLE__";

  storage.get("extension-enabled").then((value) => {
    if (value) {
      document.head.lastChild.after(style);
    }
  });

  storage.watch({
    "extension-enabled": (change) => {
      const enabled = !change.newValue;

      if (enabled) {
        style.remove();
      } else {
        document.head.lastChild.after(style);
      }
    },
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup);
} else {
  setup();
}
