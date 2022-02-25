import { useEffect } from "react";
import { Platform } from "react-native";
import { useState } from "react";

function _useKeyboardEvent(eventType, f) {
  // TODO: Add native code to this package that can capture keystrokes
  // on, say, an external keyboard connected to an iPad
  // For now, we don't have a good way to capture native keyboard events
  // on iOS or Android
  if (Platform.OS !== "web") {
    return;
  }

  useEffect(() => {
    document.addEventListener(eventType, f);

    // With `useEffect`, you return a function that performs cleanup
    return function cleanup() {
      document.removeEventListener(eventType, f);
    };

    // [] since we want to add the listener when the component is mounted
    // and remove it when the component is unmounted,
    // and not add/remove when this component is re-rendered
  }, []);
}

export function useKeydownEvent(f) {
  return _useKeyboardEvent("keydown", f);
}

export function useKeyupEvent(eventType, f) {
  return _useKeyboardEvent("keyup", f);
}

export function useOnKeydown(k, f) {
  return useKeydownEvent((e) => {
    if (e.metaKey || e.ctrlKey || e.isComposing || e.keyCode === 229) {
      return;
    }

    if (e.key === k) {
      return f(e);
    }
  });
}

function useKeyboardShortcut(shortcuts, f) {
  let shortcutList = shortcuts.split(/,/);
  for (let shortcut of shortcutList) {
    let faKeyList = [];
    for (let keyDescriptor of shortcut.split(/s/)) {
      let faKey = {};
    }
  }

  let [fas, setFas] = useState([]);

  return useKeydownEvent((e) => {
    // Ignore if ctrl or meta is pressed
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    console.log(e.key);
  });
}
