function set_ligth_theme() {
    const root_theme = document.querySelector(':root');
    root_theme.style.setProperty('--background1', 'rgb(255, 255, 255)');
    root_theme.style.setProperty('--background2', 'rgb(240, 240, 240)');
    root_theme.style.setProperty('--text1', 'black');
    root_theme.style.setProperty('--heading1', 'purple');
    root_theme.style.setProperty('--heading2', 'rgb(16, 15, 15)');
    root_theme.style.setProperty('--card_background', '#6e57e02e');
    root_theme.style.setProperty('--card_border', 'rgb(110, 87, 224)');
    root_theme.style.setProperty('--nav_link_hover', 'rgb(44, 40, 40)');
    root_theme.style.setProperty('--contact_page_input_background', 'hsl(253, 54%, 88%)');
    root_theme.style.setProperty('--contact_page_input_lable', 'black');
    root_theme.style.setProperty('--contact_page_input_text', 'black');
    root_theme.style.setProperty('--contact_page_form_send', 'rgb(140, 168, 250)');
}
function set_dark_theme() {
    const root_theme = document.querySelector(':root');
    root_theme.style.setProperty('--background1', 'rgb(0, 0, 0)');
    root_theme.style.setProperty('--background2', 'rgb(17, 17, 17)');
    root_theme.style.setProperty('--text1', 'rgb(205, 205, 205)');
    root_theme.style.setProperty('--heading1', 'wheat');
    root_theme.style.setProperty('--heading2', 'white');
    root_theme.style.setProperty('--card_background', 'rgba(45,45,52,0.6)');
    root_theme.style.setProperty('--card_border', 'rgb(110, 87, 224)');
    root_theme.style.setProperty('--nav_link_hover', 'wheat');
    root_theme.style.setProperty('--contact_page_input_background', 'hsl(250, 29%, 16%)');
    root_theme.style.setProperty('--contact_page_input_lable', 'white');
    root_theme.style.setProperty('--contact_page_input_text', 'wheat');
    root_theme.style.setProperty('--contact_page_form_send', 'royalblue');
}
if (localStorage.getItem('theme') === 'light') {
    document.getElementById("switch_checkbox").checked = true;
    set_ligth_theme();
}
function change_theme() {
    if (document.getElementById("switch_checkbox").checked) {
        set_ligth_theme()
        localStorage.setItem("theme", "light");
    } else {
        set_dark_theme()
        localStorage.setItem("theme", "dark");
    }
}