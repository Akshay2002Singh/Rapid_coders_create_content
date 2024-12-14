document.addEventListener("DOMContentLoaded", () => {
    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        mode: "markdown",
        lineNumbers: true,
        theme: "material-darker",
        lineWrapping: true,
        
    })

    const previewContainer = document.getElementById("preview");

    // Live update preview on editor changes
    editor.on("change", () => {
        const markdownContent = editor.getValue();
        const renderedHTML = marked.parse(markdownContent, {
            breaks: true,
        });
        previewContainer.innerHTML = renderedHTML;
    });

    // Toggle between views
    const toggleButton = document.getElementById("toggle-view");
    const editorPreviewContainer = document.getElementById("editor-preview-container");

    toggleButton.addEventListener("click", () => {
        if (editorPreviewContainer.classList.contains("side-by-side-view")) {
            editorPreviewContainer.classList.remove("side-by-side-view");
            editorPreviewContainer.classList.add("top-bottom-view");
            toggleButton.textContent = "Switch to Side-by-Side";

            
        } else {
            editorPreviewContainer.classList.remove("top-bottom-view");
            editorPreviewContainer.classList.add("side-by-side-view");
            toggleButton.textContent = "Switch to Top and Bottom";
        }

        setTimeout(() => editor.refresh(), 300); // Ensure layout changes apply before refresh
    });

    // Image upload handling
    const imageUpload = document.getElementById("image-upload");
    imageUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const temporaryURL = URL.createObjectURL(file);
            editor.replaceSelection(`![Alt text](${temporaryURL})`);
        }
    });
});
