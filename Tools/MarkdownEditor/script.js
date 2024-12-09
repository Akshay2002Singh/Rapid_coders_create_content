document.addEventListener("DOMContentLoaded", () => {
    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        mode: "markdown",
        lineNumbers: true,
        theme: "material-darker",
        lineWrapping: true,
    });

    const previewContainer = document.getElementById("preview");

    // Live update preview on editor changes
    editor.on("change", () => {
        const markdownContent = editor.getValue();
        const renderedHTML = marked.parse(markdownContent, {
            breaks: true, // Enable GitHub-like line breaks
        });
        previewContainer.innerHTML = renderedHTML;
    });

    // Toggle between views
    const toggleButton = document.getElementById("toggle-view");
    const editorPreviewContainer = document.getElementById("editor-preview-container");

    toggleButton.addEventListener("click", () => {
        if (editorPreviewContainer.classList.contains("top-bottom-view")) {
            editorPreviewContainer.classList.remove("top-bottom-view");
            editorPreviewContainer.classList.add("side-by-side-view");
            toggleButton.textContent = "Switch to Top and Bottom";
        } else {
            editorPreviewContainer.classList.remove("side-by-side-view");
            editorPreviewContainer.classList.add("top-bottom-view");
            toggleButton.textContent = "Switch to Side-by-Side";
        }
    });
});
