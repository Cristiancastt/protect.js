console.log("Protect.js linked properly.");
// Variables booleanas para controlar si se ejecutan las funciones
var preventContextMenu = false;
var preventCopyCutPaste = false;
var preventKeyboardShortcuts = false;
var preventRightClick = false;
var preventTextSelection = false;
var preventDragAndDrop = false;
var preventPrint = false;
var preventAltKey = false;
var preventEscapeKey = false;
var preventTabKey = false;
var preventDevShortcuts = false;
var preventPrintShortcut = false;
var preventInputText = false;
var preventDragImages = false;
var preventBackspaceKey = false;
var preventForwardNavigation = false;
var preventFileDragAndDrop = false;
var preventConsoleOutput = false;
var preventPopupWindows = false;
var preventEnterKey = false;
var preventSpecificSelection = false;
var preventCopyShortcut = false;
var preventPasteShortcut = false;
var preventCutShortcut = false;
var preventElementDisabledInteraction = false;
var preventEscapeInInputText = false;
var preventReloadShortcut = false;
var preventZoomShortcut = false;
var preventAddressBarShortcut = false;

/*
var preventContextMenu = true;
var preventCopyCutPaste = true;
var preventKeyboardShortcuts = true;
var preventRightClick = true;
var preventTextSelection = true;
var preventDragAndDrop = true;
var preventPrint = true;
var preventAltKey = true;
var preventEscapeKey = true;
var preventTabKey = true;
var preventDevShortcuts = true;
var preventPrintShortcut = true;
var preventInputText = true;
var preventDragImages = true;
var preventBackspaceKey = true;
var preventForwardNavigation = true;
var preventFileDragAndDrop = true;
var preventConsoleOutput = true;
var preventPopupWindows = true;
var preventEnterKey = true;
var preventSpecificSelection = true;
var preventCopyShortcut = true;
var preventPasteShortcut = true;
var preventCutShortcut = true;
var preventElementDisabledInteraction = true;
var preventEscapeInInputText = true;
var preventReloadShortcut = true;
var preventZoomShortcut = true;
var preventAddressBarShortcut = true;
*/

function preventDefault(event) {
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
  if (preventContextMenu) {
    window.addEventListener("contextmenu", preventDefault);
  }

  if (preventCopyCutPaste) {
    window.addEventListener("copy", preventDefault);
    window.addEventListener("cut", preventDefault);
    window.addEventListener("paste", preventDefault);
  }

  if (preventKeyboardShortcuts) {
    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && (event.key === "c" || event.key === "x" || event.key === "u")) {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (
        event.keyCode === 123 ||
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
        (event.ctrlKey && event.keyCode === 85)
      ) {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Alt") {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Tab") {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
        event.preventDefault();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "l") {
        event.preventDefault();
      }
    });
  }

  if (preventRightClick) {
    document.addEventListener("mousedown", function (e) {
      if (e.which === 3) {
        
        e.preventDefault();
      }
    });
  }

  if (preventTextSelection) {
    document.addEventListener("selectstart", preventDefault);
  }

  if (preventDragAndDrop) {
    document.addEventListener("dragstart", preventDefault);
    window.addEventListener("dragover", preventDefault);
    window.addEventListener("drop", preventDefault);
  }

  if (preventPrint) {
    window.addEventListener("beforeprint", function (e) {
      e.preventDefault();
      console.log("La impresión está deshabilitada en esta página.");
    });
  }

  if (preventAltKey) {
    window.addEventListener("keydown", function (event) {
      if (event.key === "Alt") {
        event.preventDefault();
      }
    });
  }

  if (preventEscapeKey) {
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    });
  }

  if (preventTabKey) {
    window.addEventListener("keydown", function (event) {
      if (event.key === "Tab") {
        event.preventDefault();
      }
    });
  }

  if (preventDevShortcuts) {
    window.addEventListener("keydown", function (event) {
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
      }
    });
  }

  if (preventPrintShortcut) {
    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
      }
    });
  }

  if (preventInputText) {
    var numberInputs = document.querySelectorAll("input[type='number']");
    numberInputs.forEach(function (input) {
      input.addEventListener("keydown", preventDefault);
    });

    var textInputs = document.querySelectorAll("input[type='text'], textarea");
    textInputs.forEach(function (input) {
      input.addEventListener("keydown", function (e) {
        e.stopPropagation();
      });
    });
  }

  if (preventDragImages) {
    var images = document.querySelectorAll("img");
    images.forEach(function (img) {
      img.addEventListener("dragstart", preventDefault);
    });
  }

  if (preventBackspaceKey) {
    window.addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        event.preventDefault();
      }
    });
  }

  if (preventForwardNavigation) {
    window.addEventListener("keydown", function (event) {
      if (event.key === "Forward" || event.key === "BrowserForward") {
        event.preventDefault();
      }
    });
  }

  if (preventFileDragAndDrop) {
    window.addEventListener("dragover", preventDefault);
    window.addEventListener("drop", preventDefault);
  }

  if (preventConsoleOutput) {
    console.log = console.warn = console.error = function () {};
  }

  if (preventPopupWindows) {
    window.addEventListener("beforeunload", preventDefault);
  }

  if (preventEnterKey) {
    var forms = document.querySelectorAll("form");
    forms.forEach(function (form) {
      form.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
    });
  }

  if (preventSpecificSelection) {
    var noSelectElements = document.querySelectorAll(".no-select");
    noSelectElements.forEach(function (element) {
      element.addEventListener("selectstart", preventDefault);
    });
  }

  if (preventCopyShortcut) {
    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "c") {
        event.preventDefault();
      }
    });
  }

  if (preventPasteShortcut) {
    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "v") {
        event.preventDefault();
      }
    });
  }

  if (preventCutShortcut) {
    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "x") {
        event.preventDefault();
      }
    });
  }

  if (preventElementDisabledInteraction) {
    var disabledElements = document.querySelectorAll(":disabled");
    disabledElements.forEach(function (element) {
      element.addEventListener("click", preventDefault);
      element.addEventListener("mousedown", preventDefault);
      element.addEventListener("keydown", preventDefault);
    });
  }

  if (preventEscapeInInputText) {
    var textInputs = document.querySelectorAll("input[type='text']");
    textInputs.forEach(function (input) {
      input.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          e.preventDefault();
        }
      });
    });
  }

  if (preventReloadShortcut) {
    window.addEventListener("keydown", function (event) {
      if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
        event.preventDefault();
      }
    });
  }

  if (preventZoomShortcut) {
    window.addEventListener("wheel", function (e) {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    });
  }

  if (preventAddressBarShortcut) {
    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "l") {
        event.preventDefault();
      }
    });
  }
});
