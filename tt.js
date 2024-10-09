function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isOpen = sidebar.style.left === "0px";

    sidebar.style.left = isOpen ? "-250px" : "0px"; // إغلاق الشريط الجانبي إذا كان مفتوحًا، وفتحه إذا كان مغلقًا
}
