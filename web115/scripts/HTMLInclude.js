// Tiny HTML include script
// Looks for: <div data-include="path/to/file.html"></div>
// Optional variables: data-title="Home" then use {{title}} inside included file

async function htmlInclude() {
const includeEls = document.querySelectorAll("[data-include]");

for (const el of includeEls) {
const file = el.getAttribute("data-include");
if (!file) continue;

try {
const res = await fetch(file);
if (!res.ok) throw new Error(`Could not load ${file}`);

let html = await res.text();

// Simple variable support (ex: {{title}})
// Any data-* attribute on the include tag can be used as {{name}}
for (const attr of el.attributes) {
if (attr.name.startsWith("data-") && attr.name !== "data-include") {
const key = attr.name.replace("data-", "");
const val = attr.value;
html = html.replaceAll(`{{${key}}}`, val);
}
}

el.innerHTML = html;
el.removeAttribute("data-include");
} catch (err) {
el.innerHTML = `<p style="color:red;">Include failed: ${file}</p>`;
console.error(err);
}
}
}

window.addEventListener("load", htmlInclude);
