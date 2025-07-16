document.addEventListener("DOMContentLoaded", function () {
    const sumario = document.getElementById("sumario-list");
    const conteudo = document.getElementById("conteudojs");
    const headers = conteudo.querySelectorAll("h2, h3, h4");

    headers.forEach((header, index) => {
        if (!header.id) {
            header.id = header.textContent
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]/g, '') + "-" + index;
        }

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + header.id;
        a.textContent = header.textContent;

        // Classes por nível
        if (header.tagName === "H2") {
            li.classList.add("nivel-h2");
        } else if (header.tagName === "H3") {
            li.classList.add("nivel-h3");
            li.style.marginLeft = "20px";
        } else if (header.tagName === "H4") {
            li.classList.add("nivel-h4");
            li.style.marginLeft = "40px";
        }

        li.appendChild(a);
        sumario.appendChild(li);
    });
});

