const renderElement = (element) => {
    window.addEventListener("load", () => {
        const contentDiv = document.getElementById("content");
        contentDiv.appendChild(element);
    });
};


export default renderElement;