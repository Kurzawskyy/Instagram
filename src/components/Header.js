export class Header {
    constructor() {
        console.log('header-works');
        this.createHeader();
    }

    createHeader() {
        const header = document.createElement("div");
        header.classList.add("header");

        const iconField = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = "asdfghjkljhgf";
        header.appendChild(p);
        const seartchField = document.createElement("div");
        const accountField = document.createElement("div");

        header.appendChild(iconField, seartchField, accountField);
        return header;
    }
}
