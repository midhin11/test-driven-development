export function capitalize(word) {
    return word.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
}
